import "@/styles/globals.css";
import "../styles/chatbot.css";
import "../styles/footer_v2.scss";
import type { AppProps } from "next/app";
import BodyTemplate from "../components/templates/BodyTemplate";
import { Analytics } from "@vercel/analytics/react";
import { Fragment } from "react";
// import firebase from 'firebase/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <BodyTemplate child={<Component {...pageProps} />}></BodyTemplate>
      <Analytics />
    </Fragment>
  );
}
