import * as React from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./index.module.css";
import PresentationCard from "../components/PresentationCard/PresentationCard";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import Map from "../components/Map/Map";
import Booking from "../components/Booking/Booking";
import Reviews from "../components/Reviews/Reviews";
import { GetStaticProps } from "next";
import { ILocalizationProps, getLocalizationProps } from "@/utils/localization";
import Head from "next/head";
import AdditionalInfo from "@/components/AdditionalInfo/AdditionalInfo";
import ReactGA from "react-ga";

let once = false;

export default function Index(props: ILocalizationProps): JSX.Element {
  const { strings } = props;

  // Google analytics
  React.useEffect(() => {
    if (!once && typeof window !== "undefined") {
      ReactGA.initialize("UA-80843760-1");
      ReactGA.pageview(window.location.pathname + window.location.search);
      once = true;
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
        <section className={styles.container} id="home">
          <div className={styles.titleContainer}>
            <h1>{strings.title}</h1>
            <h2 className={styles.fadeIn}>{strings.subtitle}</h2>
            <a data-scrollto="booking" className="btn" href="#booking">
              {strings.booking}
            </a>
          </div>
        </section>
        <div className={styles.pageContent}>
          <PresentationCard {...props} />
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

export const getStaticProps: GetStaticProps = ({ locale }) => {
  return {
    props: {
      ...getLocalizationProps(locale),
    },
  };
};
