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

        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
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
        {/* <script
          src="https://kit.fontawesome.com/82729a6f94.js"
          crossOrigin="anonymous"
        ></script> */}
        {/* <script>
      (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function () {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        "script",
        "https://www.google-analytics.com/analytics.js",
        "ga"
      );

      ga("create", "UA-80843760-1", "auto");
      ga("send", "pageview");
    </script> */}
      </body>
    </Html>
  );
}
