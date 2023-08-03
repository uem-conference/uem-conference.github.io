// import Head from 'next/head'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react';

// const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
	
	const importantDeadlines = [
		"Submission Opens:",
		"02/08/2023",
		"Submission Closes:",
		"02/12/2023",
		"Notification Acceptance:",
		"15/3/2024",
		"Early Bird Registration:",
		"25/3/2024",
		"Last Date of Registration:",
		"15/4/2024",
		"Submission of CRM/Copyright:",
		"01/5/2024",
	];
	useEffect(() => {
		document.title = "Home | " + "ICACS";
	}, []);
	return (
		<div className="homepage invalid-selection">
			<section className="homepage__grid--about">
				<div className="homepage__about">
					<Heading
						text={"About ICACS"}
						class={"homepage__heading my--2"}
					></Heading>
					{/* <h2 className="heading heading--2 homepage__heading">About ICACS</h2> */}
					<p className="homepage__text text text--normal">
						The International Conference on Advanced Computing and Systems
						(AdComSys) will foster an excellent international forum for
						exchanging knowledge and the recent developments in theory,
						methodologies and applications in Artificial Intelligent (AI)
						systems, Internet of Things (IoT) systems, Cybersecurity and
						Blockchain systems and emerging computing techniques. The AdcomSys
						aims to encourage the intense dialogues between academia and
						industry to bridge the gap between scholarly research, industrial
						initiatives and governmental policymaking. AdComsys 2024 will
						attribute to the diverse spectrum of keynote addresses, technical
						tracks, panel discussions and industry exhibits where academia can
						view state-of-the-art findings from the trials and interoperability
						experiments. Furthermore, the industry will benefit from exposure to
						leading-edge research and an opportunity to interact and fraternize
						with academic researchers on real-world issues.
						<br /> The purpose of AdComSys 2024 is to solicit original research
						and technical papers from researchers, scientists, academicians,
						industry professionals and students to report their experience, new
						ideas and research results about advanced computing and systems to
						discuss the practical challenges encountered and solutions adopted.{" "}
						<br /> AdComSys 2024 will be held at the University of Engineering
						and Management, Kolkata, on June 27th-28th, 2024.
					</p>
				</div>

<div className="homepage__right">
				<div className="homepage__announcements">
				<Heading
						text={"Announcements"}
						class={"homepage__heading my--2"}
					></Heading>

					<p className="homepage__text text text--normal">All accepted and presented manuscripts will be published in the Springer book series, named Smart Innovation, Systems and Technologies(SIST) (APPROVAL PENDING).</p>
				</div>

				<div className="homepage__deadlines">
					<h3 className="heading heading--3 homepage__deadlines__heading">
						Important Deadlines
					</h3>
					<ul>
						{importantDeadlines.map((data) => {
							return (
								<p key={data} className="homepage__deadlines__text">
									{data}
								</p>
							);
						})}
					</ul>
				</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;

