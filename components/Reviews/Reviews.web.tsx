import * as React from "react";

import CategoryTitle from "../CategoryTitle/CategoryTitle.web";
import ReviewParser, { Review } from "./ReviewsParser";
import styles from "./Reviews.module.css";
import Container from "react-bootstrap/Container";
import { css } from "@/utils/css";
import { ILocalizationProps } from "@/utils/localization";

/**
 * Add an uppercase to the first letter of the string.
 */
function withUppercase(input: string): string {
  return input.substring(0, 1).toUpperCase() + input.substring(1);
}

export default function Reviews({ strings }: ILocalizationProps): JSX.Element {
  const gdfReviewsUrl =
    "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=avis&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250";
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
  }, []);

  function displayRating(rating: number, title: string): JSX.Element {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <i key={`review-rating-${title}-${i}`} className="fas fa-star"></i>
        );
      } else {
        stars.push(
          <i key={`review-rating-${title}-${i}`} className="far fa-star"></i>
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

  return (
    <section
      id="reviews"
      className="col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1"
    >
      <Container>
        <CategoryTitle title={strings.reviews} />
        {displayReviews()}
        <button
          className={css(styles.moreBtn, "btn col-4 offset-4 ")}
          hidden={!reviews || nbDisplayed >= reviews?.length}
          onClick={() => showMoreReview()}
        >
          {strings.more} ..
        </button>
      </Container>
    </section>
  );
}
