import "@/styles/globals.css";
import "../styles/chatbot.css";
import "../styles/footer_v2.scss";
import "/components/pieces/KeynoteCard/keynote_card.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import BodyTemplate from "../components/templates/BodyTemplate";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="adcomsys official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <BodyTemplate child={<Component {...pageProps} />}></BodyTemplate>
    </Fragment>
  );
}
