import React from "react";
import styles from "./bodyTemplate.module.css";
import Head from "next/head";
import { Header, Footer } from "../containers";

const BodyTemplate = (props) => {
	return (
		<>
			<Header></Header>
			<main className="wrapper" style={{marginBottom: "4rem"}}>{props.child}</main>
			<Footer></Footer>
		</>
	);
};

export default BodyTemplate;
