import * as React from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./index.module.css";
import PresentationCard from "../components/PresentationCard/PresentationCard.web";
import Gallery from "../components/Gallery/Gallery.web";
import Footer from "../components/Footer/Footer.web";
import Map from "../components/Map/Map.web";
import Booking from "../components/Booking/Booking.web";
import Reviews from "../components/Reviews/Reviews.web";
import { GetStaticProps } from "next";
import { ILocalizationProps, getLocalizationProps } from "@/utils/localization";
import Head from "next/head";

export default function Index(props: ILocalizationProps): JSX.Element {
  const { strings } = props;
  React.useEffect(() => {
    const sectionsPosition: any = {};

    setTimeout(() => {
      document.querySelectorAll("section").forEach((section) => {
        sectionsPosition[section.id] = section.offsetTop;
      });
      window.onscroll = function () {
        const scrollPosition =
          document.documentElement.scrollTop || document.body.scrollTop;

        for (const key in sectionsPosition) {
          if (sectionsPosition[key] <= scrollPosition) {
            document
              .querySelector(".active")
              ?.setAttribute("class", "nav-link");
            document
              .querySelector("button[data-scrollto*=" + key + "]")
              ?.setAttribute("class", "nav-link active");
          }
        }
      };
    }, 1000);
  });

  return (
    <div>
      <Head>
        <title>{strings.pageTitle}</title>
        <meta
          name="google-site-verification"
          content="Rxj-KQK_DmWHaxm5nQ2ooRIK_6iqc8EX6tcHc3u2Uic"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={strings.pageDescription} />
        <meta name="author" content="Antoine Gannat" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        <link rel="preconnect" href="https://widget.itea.fr" />
      </Head>
      <div>
        <Navbar {...props} />
        <section className={styles.container} id="home">
          <div className={styles.titles}>
            <h1>{strings.title}</h1>
            <h2 className={styles.fadeIn}>{strings.subtitle}</h2>
            <a data-scrollto="booking" className="btn" href="#booking">
              {strings.booking}
            </a>
          </div>
        </section>
        <div className={styles.pageContent}>
          {/* <PresentationCard {...props} />
          <Gallery {...props} />
          <Booking {...props} />
          <Reviews {...props} />
          <Map {...props} /> */}
        </div>
        {/* <Footer {...props} /> */}
      </div>
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
