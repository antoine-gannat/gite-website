import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="Rxj-KQK_DmWHaxm5nQ2ooRIK_6iqc8EX6tcHc3u2Uic"
        />
        <meta charSet="utf-8" />
        <meta name="author" content="Antoine Gannat" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto&display=optional"
        />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        <link rel="preconnect" href="https://widget.itea.fr" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
