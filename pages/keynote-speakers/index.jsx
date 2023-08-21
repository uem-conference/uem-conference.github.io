import React, { useEffect } from "react";
import { Heading } from "../../components/pieces";
import Head from "next/head";
function KeynoteSpeakers() {
	useEffect(() => {
		document.title = "Keynote Speakers | " + process.env.app_name;
	}, []);
	return (
		<>
			<Head>
				<title>Keynote Speakers | Home</title>
				<meta
					name="description"
					content="Learn about the keynote speakers for your conference."
				/>

				<meta property="og:title" content="Keynote Speakers | Home" />
				<meta
					property="og:description"
					content="Learn about the keynote speakers for your conference."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://adcomsys.vercel.app/keynote-speakers"
				/>
				<meta
					property="og:image"
					content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
				/>
				<meta property="og:image:alt" content="Keynote Speakers" />
				<meta property="og:locale" content="en_US" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta name="author" content="Ankur Halder" />
				<meta name="robots" content="index, follow" />
				<meta name="language" content="English" />
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.ico" />

				<meta name="geo.region" content="IN-WB" />
				<meta name="geo.placename" content="Kolkata, India" />
				<meta name="geo.position" content="22.572645;88.363892" />
				<meta name="ICBM" content="22.572645, 88.363892" />

				<meta http-equiv="content-language" content="en" />
			</Head>

			<Heading text={"Keynote Speakers"} class={"mb--2"}></Heading>
			<div className="content-container">
				<h3 className=" heading heading--2 sub-title">
					<center>To Be Updated</center>
				</h3>
			</div>
		</>
	);
}

export default KeynoteSpeakers;
