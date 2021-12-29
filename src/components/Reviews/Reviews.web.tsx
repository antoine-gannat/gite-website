import "./Reviews.styles.ts";

import * as React from "react";

import { useLocalization } from "../../hooks/useLocalization";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import strings from "./Reviews.strings.json";
import ReviewParser, { Review } from "./ReviewsParser";
import { useStyles } from "./Reviews.styles";
import { css } from "../../utils";

export default function Reviews(): JSX.Element {
  const gdfReviewsUrl =
    "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=avis&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250";
  const [reviews, setReviews] = React.useState<Review[] | null>([]);
  const [nbDisplayed, setNbDisplayed] = React.useState<number>(5);
  const localizer = useLocalization(strings);
  const styles = useStyles();

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
      return <h4>{localizer("loading")}</h4>;
    }
    return reviews.slice(0, nbDisplayed).map((review, index) => (
      <div
        className={styles.review}
        key={`review-${index}`}
        id={`review-${index}`}
      >
        <p className={styles.reviewTitle}>{review.title}</p>
        <div className={styles.reviewInfo}>
          <b>{review.reviewer}</b>
          {displayRating(review.rating, review.title)}
          <small className={styles.date}>
            {localizer("on") + " "}
            {review.date}
          </small>
        </div>
        <cite>{review.text || "-"}</cite>
        <hr className={styles.separation} />
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
      <CategoryTitle title={localizer("reviews")} />
      {displayReviews()}
      <button
        className={css(
          styles.moreBtn,
          "btn col-lg-4 col-md-6 col-sm-6 offset-lg-4 offset-md-3 offset-sm-3"
        )}
        hidden={!reviews || nbDisplayed >= reviews?.length}
        onClick={() => showMoreReview()}
      >
        {localizer("more")} ..
      </button>
    </section>
  );
}
