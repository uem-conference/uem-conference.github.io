/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { Heading } from "../../../components/pieces";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Submissions = () => {
	return (
		<>
			<Head>
				<Head>
					<title>Information for Authors | Submissions</title>
					<meta
						name="description"
						content="Learn about the submission guidelines and information for authors at the conference."
					/>

					<meta
						property="og:title"
						content="Information for Authors | Submissions"
					/>
					<meta
						property="og:description"
						content="Learn about the submission guidelines and information for authors at the conference."
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:url"
						content="https://adcomsys.vercel.app/authors/submissions"
					/>
					<meta
						property="og:image"
						content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
					/>
					<meta property="og:image:alt" content="Information for Authors" />
					<meta property="og:locale" content="en_US" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>

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
			</Head>
			<style jsx>{`
				// p {
				// 	display: flex;
				// 	flex-direction: row;
				// 	align-items: center;
				// }
			`}</style>

			<Heading
				text={"INFORMATION FOR AUTHORS"}
				class={"my--2"}
				element="h1"
			></Heading>
			<div className="submissions content-container">
				<p className="submissions__heading heading heading--2 heading--line my--2">
					GUIDELINES FOR SUBMISSION:
				</p>

				<p className="submissions__text text text--normal">
					Prospective authors are invited to submit original technical papers
					that have not been submitted elsewhere for publication (copyright
					infringement issues will be the authors' responsibility) in the
					AdComSys 2024 Conference Proceedings. Papers must be written in good
					english. The Conference Management Toolkit (CMT) portal will be used
					for the submission link. All manuscripts will be double-blind reviewed
					for technical content and scope by a technical program committee. The
					authors must submit the paper without including their names and
					affiliation.
					{/* If you are new to Conference Management Toolkit (CMT),
					please visit&nbsp;
					<a href="https://cmt3.research.microsoft.com/AdComSys2024">
						this page.
					</a> */}
				</p>
				<p className="submissions__text text text--normal">
					The organizers of AdComSys 2024 are strict about Plagiarism. The
					submitting authors should avoid the deliberate or reckless
					representation of another’s words, thoughts, or ideas as one’s own
					without attribution in connection with submitting academic work,
					whether graded or otherwise. The Technical Program Committee will
					check the plagiarism level of all the submitted papers to ensure the
					originality of the content using Turnitin (Turnitin) plagiarism
					checking software, and any paper having a similarity score above 15%
					will not be processed further.
				</p>
				<p className="submissions__heading heading heading--2 heading--line my--2">
					In order to submit the paper at AdComSys:-
				</p>

				<p className="submissions__text text text--normal">
					Prospective authors are invited to submit manuscripts at{" "}
					<a
						href="https://cmt3.research.microsoft.com/AdComSys2024"
						target="_blank"
					>
						https://cmt3.research.microsoft.com/AdComSys2024
					</a>{" "}
					reporting original unpublished research and recent developments in the
					topics related to the SCOPE of the conference.
				</p>

				{/* <p className="submissions__heading heading heading--3 mb--1">
					The word template is available at :-
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
					The Latex Template Is Available At:-{" "}
					<Link href={"/assets/downloads/LaTex+Package.zip"}>
						<Image
							className="download-icon"
							src="/assets/icons/download.png"
							alt="download-icon"
							width={25}
							height={25}
						></Image>
					</Link>
				</p> */}
				<p className="submissions__heading heading heading--3 mb--1">
					Details can also be found in the Call for Papers:-
					<Link href={"/assets/downloads/Call-For-Papers.pdf"}>
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
					To download Conference Brochure:-
					<Link href={"/assets/downloads/AdComSys 2024 Brochure.pdf"}>
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
					convenience. &nbsp; However, all matters related to publication and
					indexing will remain unchanged.
				</p>

				<p className="submissions__heading heading heading--3 mb--1">
					PPT Template of AdComSYs 2024:- Will Be Provided Soon
					{/* <Link href="/authors/submissions">
						<Image
							className="download-icon"
							src="/assets/icons/download.png"
							alt="download-icon"
							width={25}
							height={25}
						></Image>
					</Link> */}
				</p>

				<p className="submissions__heading heading heading--2 heading--line my--2">
					AdComSys 2024 Paper Categories:
				</p>

				<ul className=" text-2 text--normal list">
					<li className="list-item">
						Regular Paper – 10 pages minimum and 12 pages maximum.
					</li>
					<li className="list-item">
						There is no provision for submitting short papers and
						posters (4 – 6 pages)
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
