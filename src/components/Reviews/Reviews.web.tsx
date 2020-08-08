import * as React from "react";
import { DefaultPropsWithTranslation } from "../../types/props";
import { translateComponent } from "../Translation/Translator";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import ReviewParser, { Review } from "./ReviewsParser";
import strings from "./Reviews.strings.json";
import "./Reviews.styles.css";

function Reviews({ translate }: DefaultPropsWithTranslation): JSX.Element {
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
    return <div>{stars}</div>;
  }

  function displayReviews() {
    if (reviews === null) {
      return <h4>{translate("loading")}</h4>;
    }
    return reviews.slice(0, nbDisplayed).map((review, index) => (
      <div className="review" key={`review-${index}`}>
        <h4>{review.title}</h4>
        <p>
          <b>{review.reviewer}</b>
          {displayRating(review.rating, review.title)}
        </p>
        <cite>{review.text}</cite>
        <hr className="w-50" />
      </div>
    ));
  }

  return (
    <section
      id="reviews"
      className="col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1"
    >
      <CategoryTitle title={translate("reviews")} />
      {displayReviews()}
      <button
        className="btn more-btn"
        hidden={!reviews || nbDisplayed >= reviews?.length}
        onClick={() => setNbDisplayed(nbDisplayed + 5)}
      >
        {translate("more")} ..
      </button>
    </section>
  );
}

export default translateComponent(Reviews, strings);