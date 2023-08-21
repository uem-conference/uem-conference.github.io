import React from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { Heading } from "../../../components/pieces";
import Image from "next/image";
import Head from "next/head";
const technicalProgramCommittee = require("../../../data/technical-program-committee");
function TechnicalProgramCommittee() {
	useEffect(() => {
		document.title =
			"Technical Program Committee | Committees | " + process.env.app_name;
	}, []);
	return (
		<>
			<Heading
				text={"Technical Program Committee"}
				class={"mb--2 invalid-selection"}
				element="h1"
			></Heading>
			<Head>
				<title>
					Technical Program Committee | Committees | Your Conference Name
				</title>
				<meta
					name="description"
					content="Learn about the Technical Program Committee for your conference."
				/>

				<meta
					property="og:title"
					content="Technical Program Committee | Committees "
				/>
				<meta
					property="og:description"
					content="Learn about the Technical Program Committee for your conference."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://adcomsys.vercel.app/committees/technical-program"
				/>
				<meta
					property="og:image"
					content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
				/>
				<meta property="og:image:alt" content="Technical Program Committee" />
				<meta property="og:locale" content="en_US" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta name="author" content="Ankur Halder" />
				<meta name="robots" content="index, follow" />
				<meta name="language" content="en" />
				<meta charset="UTF-8" />
				<link rel="icon" href="/favicon.ico" />

				<meta name="geo.region" content="IN-WB" />
				<meta name="geo.placename" content="Kolkata, India" />
				<meta name="geo.position" content="22.572645;88.363892" />
				<meta name="ICBM" content="22.572645, 88.363892" />
			</Head>
			<div className="technical-program-committee ">
				<div className="committee-table">
					{technicalProgramCommittee.map((member, index) => {
						return (
							<Fragment key={member.name + member.affiliation}>
								<p className="committee-table__field committee-table__name">
									<span className="committee-table__flag--conatiner">
										<Image
											src={`https://flagsapi.com/${member.country}/shiny/64.png`}
											layout="fill"
											objectFit="contain"
											alt={member.country}
										></Image>
									</span>
									{member.name}
								</p>
								<p
									className={`committee-table__affiliation committee-table__field ${
										index % 2 === 0
											? "committee-table__affiliation--even"
											: "committee-table__affiliation--odd"
									} technical-program-committee__ontent`}
								>
									{member.affiliation}
								</p>
							</Fragment>
						);
					})}
				</div>
			</div>
			<style jsx>{`
				.technical-program-committee {
					padding: 0rem 1rem;
				}
			`}</style>
		</>
	);
}
export default TechnicalProgramCommittee;
