import * as React from "react";

import CategoryTitle from "../CategoryTitle/CategoryTitle";
import ReviewParser, { Review } from "./ReviewsParser";
import styles from "./Reviews.module.css";
import Container from "react-bootstrap/Container";
import { css } from "@/utils/css";
import { IComponentBaseProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

/**
 * Add an uppercase to the first letter of the string.
 */
function withUppercase(input: string): string {
  return input.substring(0, 1).toUpperCase() + input.substring(1);
}

export default function Reviews({
  strings,
  data: { gdfReviewsUrl, siteName },
}: IComponentBaseProps): JSX.Element {
  const [reviews, setReviews] = React.useState<Review[] | null>([]);
  const [nbDisplayed, setNbDisplayed] = React.useState<number>(5);

  React.useEffect(() => {
    fetch(gdfReviewsUrl)
      .then(async (data) => {
        const parser = new ReviewParser(await data.text());
        setReviews(parser.getReviews());
      })
      .catch(() => {
        setReviews(null);
      });
  }, [gdfReviewsUrl]);

  function displayRating(rating: number, title: string): JSX.Element {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon key={`review-rating-${title}-${i}`} icon={faStar} />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={`review-rating-${title}-${i}`}
            icon={faStarRegular}
          />
        );
      }
    }
    return <div className={styles.rating}>{stars}</div>;
  }

  function displayReviews() {
    if (reviews === null) {
      return <h4>{strings.loading}</h4>;
    }
    return reviews.slice(0, nbDisplayed).map((review, index) => (
      <div className="mb-5" key={`review-${index}`} id={`review-${index}`}>
        <p className="text-center text-xl underline">
          {withUppercase(review.title)}
        </p>
        <div className="relative">
          <b>{review.reviewer}</b>
          {displayRating(review.rating, review.title)}
          <small className="absolute right-3 top-0">
            {strings.on + " "}
            {review.date}
          </small>
        </div>
        <cite>{review.text || "-"}</cite>
      </div>
    ));
  }

  function showMoreReview() {
    setNbDisplayed(nbDisplayed + 5);
    // Scroll to the previous review
    setTimeout(() => {
      document.getElementById("review-" + (nbDisplayed - 1))?.scrollIntoView();
    }, 10);
  }

  const hasReviews = reviews && reviews.length > 0;

  return (
    <section
      id="reviews"
      className="col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1"
    >
      <Container>
        <CategoryTitle title={strings.reviews} />
        {hasReviews ? (
          displayReviews()
        ) : (
          <div className={styles.noReviewsYet}>{strings.noReviewsYet}</div>
        )}
        {hasReviews && (
          <button
            className={css(styles.moreBtn, "btn col-4 offset-4 ")}
            hidden={!reviews || nbDisplayed >= reviews?.length}
            onClick={() => showMoreReview()}
          >
            {strings.more} ..
          </button>
        )}
      </Container>
    </section>
  );
}
