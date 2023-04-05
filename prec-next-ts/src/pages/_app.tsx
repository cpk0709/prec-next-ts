import "@/src/styles/globals.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/reset";
import type { AppProps } from "next/app";
import Head from "@/src/components/items/Head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Head />
      <Component {...pageProps} />
    </>
  );
}
