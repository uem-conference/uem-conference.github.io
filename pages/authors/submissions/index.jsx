import React, { useEffect } from "react";
import { Heading } from "../../../components/pieces";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Submissions = () => {
	// useEffect(() => {
	// 	document.title = "Submissions | Authors |" + process.env.app_name;
	// }, []);
	return (
		<>
			<Head>
				{/* regular */}
				<title>
					{"Submissions | Authors | AdComSys |" + process.env.app_name}
				</title>
				<meta
					name="description"
					content="Learn how to submit your paper for AdComSys conference proceedings. Find templates, guidelines, and agreements for authors. Mode of presentation and paper categories explained."
				/>
				<meta
					name="keywords"
					content="Submissions, Authors, AdComSys, conference proceedings, templates, guidelines, agreements, presentation, paper categories"
				/>
				{/* social media */}
				<meta property="og:title" content="Submissions | Authors | AdComSys" />
				<meta
					property="og:description"
					content="Learn how to submit your paper for AdComSys conference proceedings. Find templates, guidelines, and agreements for authors. Mode of presentation and paper categories explained."
				/>
				{/* <meta property="og:image" content="/path/to/your/image.jpg" /> Add a
				relevant image URL */}
				<meta
					property="og:url"
					content="https://adcomsys.vercel.app/authors/submissions"
				/>
				<meta property="og:type" content="website" />
				{/* for twitter */}
				<meta name="twitter:card" content="summary" />
				{/* <meta name="twitter:site" content="@yourtwitterhandle" /> */}
				<meta name="twitter:title" content="Submissions | Authors | AdComSys" />
				<meta
					name="twitter:description"
					content="Learn how to submit your paper for AdComSys conference proceedings. Find templates, guidelines, and agreements for authors. Mode of presentation and paper categories explained."
				/>
				{/* <meta name="twitter:image" content="/path/to/your/image.jpg" />{" "} */}
				{/* Add a relevant image URL */}
			</Head>
			<style jsx>{`
				p {
					display: flex;
					flex-direction: row;
					align-items: center;
				}
			`}</style>

			<Heading
				text={"INFORMATION FOR AUTHORS OF SPRINGER CONFERENCE PROCEEDINGS"}
				class={"my--2"}
			></Heading>
			<div className="submissions content-container">
				<p className="submissions__text text text--normal">
					The Conference Management Toolkit (CMT) portal is to be used for the
					submission link and all reviews are to be done as per the double-blind
					mode. Here authors must submit the paper without including their names
					and affiliation.
				</p>

				<p className="submissions__heading heading heading--2 heading--line my--2">
					In order to submit the paper at AdComSys:-
				</p>

				<p className="submissions__text text text--normal">
					Prospective authors are invited to submit manuscripts reporting
					original unpublished research and recent developments in the topics
					related to the SCOPE of the conference.
				</p>

				<p className="submissions__heading heading heading--3 mb--1">
					Template in Microsoft Word (US Letter):-
					<Link href={"/assets/downloads/Word+Template.zip"}>
						<Image
							className="download-icon"
							src="/assets/icons/download.png"
							alt="download-icon"
							width={25}
							height={25}
						></Image>
					</Link>
				</p>
				<p className="submissions__heading heading heading--3 mb--1">
					LaTeX format:-{" "}
					<Link href={"/assets/downloads/LaTex+Package.zip"}>
						<Image
							className="download-icon"
							src="/assets/icons/download.png"
							alt="download-icon"
							width={25}
							height={25}
						></Image>
					</Link>
				</p>
				<p className="submissions__heading heading heading--3 mb--1">
					Details can also be found in the Call for Papers: Soon
					<Link href="/authors/submissions">
						<Image
							className="download-icon"
							src="/assets/icons/download.png"
							alt="download-icon"
							width={25}
							height={25}
						></Image>
					</Link>
				</p>
				<p className="submissions__heading heading heading--3 mb--1">
					To download Conference Brochure:- Soon
					<Link href="/authors/submissions">
						<Image
							className="download-icon"
							src="/assets/icons/download.png"
							alt="download-icon"
							width={25}
							height={25}
						></Image>
					</Link>
				</p>

				<p className="submissions__text text text--normal">
					After getting the acceptance e-mail of the Paper, the author needs to
					submit the following agreement to the conference e-mail-
					adcomsys@uem.edu.in. Otherwise, the accepted paper will not be
					published in the conference proceedings. The agreements are given
					below:-
				</p>

				<p className="submissions__heading heading heading--3 mb--1">
					Publishing Agreement Form(Copy Right Form):- Soon
					<Link href="/authors/submissions">
						<Image
							className="download-icon"
							src="/assets/icons/download.png"
							alt="download-icon"
							width={25}
							height={25}
						></Image>
					</Link>
				</p>
				<p className="submissions__heading heading heading--3 mb--1">
					Permission Guideline:- Soon
					<Link href="/authors/submissions">
						<Image
							className="download-icon"
							src="/assets/icons/download.png"
							alt="download-icon"
							width={25}
							height={25}
						></Image>
					</Link>
				</p>

				<p className="submissions__heading heading heading--2 heading--line my--2">
					Mode of Presentation:-
				</p>

				<p className="submissions__text text text--normal">
					Mode of presentation – AdComSys2524 will be held in HYBRID MODE where
					authors shall present their papers either in physical mode at the
					conference venue or through ONLINE as per their preference and
					convenience. The proceedings and certificates will be sent to the
					corresponding authors through the post in case of an online
					presentation. However, all matters related to publication and indexing
					will remain unchanged.
				</p>

				<p className="submissions__heading heading heading--3 mb--1">
					PPT Template of AdComSYs 2024:- Soon
					<Link href="/authors/submissions">
						<Image
							className="download-icon"
							src="/assets/icons/download.png"
							alt="download-icon"
							width={25}
							height={25}
						></Image>
					</Link>
				</p>

				<p className="submissions__heading heading heading--2 heading--line my--2">
					AdComSys 2024 Paper Categories:
				</p>

				<ul className=" text-2 text--normal list">
					<li className="list-item">
						Regular Paper – 12 pages minimum (2 additional pages allowed but at
						an extra charge).
					</li>
					<li className="list-item">
						There is no provision for submitting short papers and poster papers.
					</li>
					<li className="list-item">
						Regular papers should present novel perspectives within the general
						scope of the conference.
					</li>
				</ul>
			</div>
		</>
	);
};

export default Submissions;
