import React, { Fragment, useEffect } from "react";
import { Heading } from "../../../components/pieces";
import callForPaperList from "../../../data/callForPaperList";
import Head from "next/head";
const CallForPapers = () => {
	useEffect(() => {
		document.title = "Call For Papers | Authors | " + process.env.app_name;
	}, []);
	return (
		<>
			<Head>
				<title>Call For Papers | Authors</title>
				<meta
					name="description"
					content="Learn about the call for papers for your conference."
				/>

				<meta property="og:title" content="Call For Papers | Authors" />
				<meta
					property="og:description"
					content="Learn about the call for papers for your conference."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://adcomsys.vercel.app/authors/call-for-papers"
				/>
				<meta
					property="og:image"
					content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
				/>
				<meta property="og:image:alt" content="Call For Papers" />
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

			<style jsx>{`
				.btn__container {
					width: 100%;
					max-width: 100rem;
					margin: auto;
					display: grid;
					align-items: center;
					grid-template-columns: 2fr 1fr 1fr;
					padding: 1rem 2rem;
					margin-bottom: 2rem;
					// padding-bottom: 1rem;
					gap: 2rem;
					background-color: #ccc;
				}

				// .btn__container>*{
				// 	width: 100%;
				// }
				.btn__container > p {
					// text-align: center;
					text-transform: capitalize;
					letter-spacing: 1px;
					padding: 1rem;
				}
				.btn__container > a {
					width: 100%;
				}
				.btn__container > a > button {
					width: 100%;
				}

				@media screen and (max-width: 450px) {
					.btn__container {
						grid-template-columns: 1fr;
					}
					.btn__container > p {
						text-align: center;
						padding-bottom: 0;
					}
				}
			`}</style>
			<Heading
				text={"Call for papers"}
				class={"mb--2 invalid-selection"}
			></Heading>
			<div className="btn__container">
				<p>DOWNLOAD CALL FOR PAPERS / TOPICS</p>
				<a href="/assets/downloads/Call-For-Papers.pdf" target="_blank">
					<button className="btn btn--primary"> PDF</button>
				</a>

				{/* <a href="/assets/downloads/" target="_blank">
          <button className="btn btn--primary">Text</button>
        </a> */}
			</div>
			<section
				className="call-for-papers call-for-papers__gri"
				style={{ "--num-col": "2" }}
			>
				<div className="call-for-papers__grid" style={{ "--num-col": "1" }}>
					<h1 className="call-for-papers__track" style={{ "--colspan": "1/2" }}>
						{callForPaperList[0].title}
					</h1>
					{callForPaperList[0].subtracks.map((subtrack) => {
						return (
							<Fragment key={Math.random()}>
								<div
									className="call-for-papers__column"
									style={{ "--num-col": "2" }}
								>
									<h2
										className="call-for-papers__row call-for-papers__subtrack"
										style={{ "--colspan": "1/3" }}
									>
										{subtrack.title}
									</h2>
									<div
										className="call-for-papers__list"
										style={{
											"--num-rows": `${subtrack.subtrackData[0].length}`,
										}}
									>
										{subtrack.subtrackData[0].map((data) => (
											<p className="call-for-papers__data" key={data}>
												{data}
											</p>
										))}
									</div>
									<div
										className="call-for-papers__list"
										style={{
											"--num-rows": `${subtrack.subtrackData[1].length}`,
										}}
									>
										{subtrack.subtrackData[1].map((data) => (
											<p className="call-for-papers__data" key={data}>
												{data}
											</p>
										))}
									</div>
								</div>
							</Fragment>
						);
					})}
				</div>

				<div className="call-for-papers__grid" style={{ "--num-col": "3" }}>
					<h1 className="call-for-papers__track" style={{ "--colspan": "1/4" }}>
						{callForPaperList[1].title}
					</h1>

					{callForPaperList[1].subtracks.map((subtrack) => {
						return (
							<Fragment key={Math.random()}>
								<div
									className="call-for-papers__column"
									style={{ "--num-col": "1" }}
								>
									<h2 className="call-for-papers__subtrack">
										{subtrack.title}
									</h2>
									<div
										className="call-for-papers__list"
										style={{ "--num-rows": `${subtrack.subtrackData.length}` }}
									>
										{subtrack.subtrackData.map((data) => (
											<p className="call-for-papers__data" key={data}>
												{data}
											</p>
										))}
									</div>
								</div>
							</Fragment>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default CallForPapers;
