import "@/src/styles/globals.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/reset";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
