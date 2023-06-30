import "./globals.css";
import type { AppProps } from "next/app";
import * as React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
