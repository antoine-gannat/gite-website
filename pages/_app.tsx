// import global styles
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const isDev =
    typeof location !== "undefined" && location.hostname === "localhost";
  return (
    <>
      {!isDev && (
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7JLY9FBTVE" />
      )}
      {!isDev && (
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-7JLY9FBTVE');
        `}
        </Script>
      )}
      <Component {...pageProps} />
    </>
  );
}
