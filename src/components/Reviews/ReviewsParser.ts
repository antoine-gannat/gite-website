export type Review = {
  text: string;
  reviewer: string;
  title: string;
  rating: number;
  date: string;
};

export type RawReview = {
  author: {
    "@type": string;
    name: string;
  };
  name: string;
  reviewBody: string;
  reviewRating: {
    "@type": string;
    ratingValue: number;
  };
  date: string;
};

export default class ReviewParser {
  dataAsElement: Document;
  constructor(rawData: string) {
    // parse the string to an HTML element
    this.dataAsElement = new DOMParser().parseFromString(
      rawData.replace(/\\"/g, '"'),
      "text/html"
    );
  }

  decodeHtmlString(content: string): string {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = content;
    return textArea.value;
  }

  getParsedContent(): RawReview[] {
    const endReviewElement = '</p><p class="p_widget_itea_avis_noteGlobale">';
    let scriptElement = this.dataAsElement.getElementsByTagName("script")[0];
    if (!scriptElement) {
      return [];
    }
    // clean a bit the content
    let content = scriptElement.innerHTML
      .replace(/\\n/g, "")
      .replace(/\\\//g, "/");
    let startIndex, endIndex;
    let result: RawReview[] = [];
    while (
      (startIndex = content.indexOf('"reviewRating')) >= 0 &&
      (endIndex = content.indexOf(endReviewElement)) >= 0
    ) {
      try {
        let jsonContent = JSON.parse(
          "{" + content.slice(startIndex, content.indexOf("</script>"))
        );
        jsonContent.date = content.slice(
          content.indexOf("Published on") + "Published on".length,
          content.indexOf(endReviewElement)
        );
        result.push(jsonContent);
      } catch (err) {}
      content = content.slice(endIndex + endReviewElement.length);
    }
    return result;
  }

  getReviews(): Review[] {
    return this.getParsedContent().map((rawReview) => ({
      text: this.decodeHtmlString(rawReview.reviewBody),
      reviewer: this.decodeHtmlString(rawReview.author.name),
      title: this.decodeHtmlString(rawReview.name),
      rating: rawReview.reviewRating.ratingValue,
      date: rawReview.date,
    }));
  }
}
