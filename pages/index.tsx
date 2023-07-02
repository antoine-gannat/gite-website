import * as React from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./index.module.css";
import PresentationCard from "../components/PresentationCard/PresentationCard.web";
import Gallery from "../components/Gallery/Gallery.web";
import Footer from "../components/Footer/Footer.web";
import Map from "../components/Map/Map.web";
import Booking from "../components/Booking/Booking";
import Reviews from "../components/Reviews/Reviews.web";
import { GetStaticProps } from "next";
import { ILocalizationProps, getLocalizationProps } from "@/utils/localization";
import Head from "next/head";
import AdditionalInfo from "@/components/AdditionalInfo/AdditionalInfo.web";

export default function Index(props: ILocalizationProps): JSX.Element {
  const { strings } = props;

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
