export type Review = {
  text: string;
  reviewer: string;
  title: string;
  rating: number;
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
      (endIndex = content.indexOf("</script>")) >= 0
    ) {
      try {
        const jsonContent = JSON.parse(
          "{" + content.slice(startIndex, endIndex)
        );
        result.push(jsonContent);
      } catch (err) {}
      content = content.slice(endIndex + "</script>".length);
    }
    return result;
  }

  getReviews(): Review[] {
    return this.getParsedContent().map((rawReview) => ({
      text: this.decodeHtmlString(rawReview.reviewBody),
      reviewer: this.decodeHtmlString(rawReview.author.name),
      title: this.decodeHtmlString(rawReview.name),
      rating: rawReview.reviewRating.ratingValue,
    }));
  }
}
