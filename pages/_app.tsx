import "@/styles/globals.css";
import "../styles/chatbot.css";
// import "../styles/chatbot.scss";
import type { AppProps } from "next/app";
import BodyTemplate from "../components/templates/BodyTemplate";

// import firebase from 'firebase/app';

export default function App({ Component, pageProps }: AppProps) {
	return <BodyTemplate child={<Component {...pageProps} />}></BodyTemplate>;
}
