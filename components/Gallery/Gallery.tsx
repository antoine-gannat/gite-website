import * as React from "react";

import CategoryTitle from "../CategoryTitle/CategoryTitle";
import styles from "./Gallery.module.css";
import { ILocalizationProps } from "@/utils/localization/localization";
import Image from "next/image";
import { css } from "@/utils/css";

interface ICategoryInformation {
  category: string;
  count: number;
}

const categoriesInformation: ICategoryInformation[] = [
  { category: "pool", count: 8 },
  { category: "bedroom", count: 8 },
  { category: "kitchen", count: 5 },
  { category: "dining-room", count: 5 },
  { category: "outdoor", count: 14 },
  { category: "environment", count: 5 },
];

function Slideshow({
  categoryInfo: { category, count },
}: {
  categoryInfo: ICategoryInformation;
}) {
  const [activeIndex, setActiveIndex] = React.useState(1);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="h-auto w-4/5 max-md:w-full relative">
        <Image
          src={`/images/${category}/picture_${activeIndex}.jpg`}
          className="object-contain"
          alt={category}
          fill
        />
      </div>
      <div className="flex flex-row justify-center gap-1 h-1/5 w-full px-5">
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            className="relative h-40 w-full hover:cursor-pointer hover:opacity-80"
            onClick={() => setActiveIndex(i + 1)}
          >
            <Image
              src={`/images/${category}/picture_${i + 1}.jpg`}
              className="object-contain"
              alt="preview image"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CarouselIcon({ offset }: { offset?: boolean }) {
  return (
    <svg
      aria-label="Carousel"
      className={"absolute top-4 z-10 " + (!offset ? "right-4" : "")}
      style={offset ? { right: "0.875rem", opacity: "0.2" } : undefined}
      fill={offset ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}
      height="40"
      role="img"
      viewBox="0 0 48 48"
      width="40"
    >
      <title>Carousel</title>
      <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
    </svg>
  );
}

export default function Gallery({ strings }: ILocalizationProps): JSX.Element {
  const [activeSlideshow, setActiveSlideshow] =
    React.useState<ICategoryInformation | null>(null);

  return (
    <section id="gallery">
      <div className="px-36">
        <CategoryTitle title={strings.gallery} />
      </div>
      {activeSlideshow && <Slideshow categoryInfo={activeSlideshow} />}
      <div className="flex flex-row flex-wrap gap-2 justify-center col p-10 max-sm:p-0">
        {categoriesInformation.map((categoryInfo) => (
          <div
            key={categoryInfo.category}
            onClick={() =>
              setActiveSlideshow(
                activeSlideshow?.category === categoryInfo.category
                  ? null
                  : categoryInfo
              )
            }
            className={css(
              "relative max-sm:w-1/3 w-1/4 aspect-square hover:cursor-pointer hover:opacity-90",
              activeSlideshow?.category === categoryInfo.category
                ? "opacity-50"
                : "opacity-100"
            )}
          >
            <CarouselIcon offset />
            <CarouselIcon />

            <Image
              className="object-cover rounded-md"
              fill
              alt={categoryInfo.category}
              src={`/images/gallery-preview/${categoryInfo.category}.jpg`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
