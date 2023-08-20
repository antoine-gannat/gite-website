import * as React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import PresentationCard from "../PresentationCard/PresentationCard";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import Map from "../Map/Map";
import Booking from "../Booking/Booking";
import Reviews from "../Reviews/Reviews";
import Head from "next/head";
import AdditionalInfo from "@/components/AdditionalInfo/AdditionalInfo";
import { scrollTo } from "@/utils/scrollTo";
import { IComponentBaseProps } from "../types";
import { LinkToOtherCottage } from "../LinkToOtherCottage/LinkToOtherCottage";

let once = false;

// Trigger the google analytics once.
function runAnalytics() {
  const dataLayer = (window as any).dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  (gtag as any)("js", new Date());

  (gtag as any)("config", "G-7JLY9FBTVE");
  once = true;
}

export default function Home(props: IComponentBaseProps): JSX.Element {
  const { strings, images } = props;

  // Google analytics
  React.useEffect(() => {
    if (!once && typeof window !== "undefined") {
      runAnalytics();
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{strings.pageTitle}</title>
        <meta name="description" content={strings.pageDescription} />
      </Head>
      <div>
        <Navbar {...props} />
        <section
          className={styles.container}
          style={{
            backgroundImage: `url("${images.homeMainPicture}")`,
          }}
          id="home"
        >
          <div className={styles.titleContainer}>
            <h1>{strings.title}</h1>
            <h2 className={styles.fadeIn}>{strings.subtitle}</h2>
            <a
              type="button"
              className="btn"
              onClick={() => scrollTo("booking")}
            >
              {strings.booking}
            </a>
          </div>
        </section>
        <div className={styles.pageContent}>
          <PresentationCard {...props} />
          <LinkToOtherCottage {...props} />
          <Gallery {...props} />
          <Booking {...props} />
          <Reviews {...props} />
          <Map {...props} />
          <AdditionalInfo {...props} />
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
}
