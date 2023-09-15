import React from "react";
import styles from "./bodyTemplate.module.css";
import Head from "next/head";
import { Header, Footer } from "../containers";
import { ChatBot } from "../pieces";
import { ChatBot_v2 } from "../pieces";
const BodyTemplate = (props) => {
	return (
		<>
			{/* <ChatBot></ChatBot> */}
			<Header></Header>
			<main className="wrapper" style={{ marginBottom: "4rem" }}>
				{props.child}
			</main>
			<Footer></Footer>
			<ChatBot_v2></ChatBot_v2>
		</>
	);
};

export default BodyTemplate;
