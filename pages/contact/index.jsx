import React, { useEffect } from "react";
import { Heading } from "../../components/pieces";
import Image from "next/legacy/image";
import Head from "next/head";
const ContactPage = () => {
	useEffect(() => {
		document.title = "Contact | " + process.env.app_name;
	}, []);
	function clickMailHandler(email, subject) {
		const body =
			"Hello, I would like to inquire about the AdComSys Conference.";
		const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailtoUrl;
	}
	return (
		<>
			<Head>
				<title>Contact | Your Conference Name</title>
				<meta
					name="description"
					content="Get in touch with the organizers of the conference."
				/>

				<meta property="og:title" content="Contact" />
				<meta
					property="og:description"
					content="Get in touch with the organizers of the conference."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://adcomsys.vercel.app/contact" />
				<meta
					property="og:image"
					content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
				/>
				<meta property="og:image:alt" content="Contact" />
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
			<style jsx>{`
				.contact__grid {
					display: grid;
					grid-template-columns: 2fr 3fr;
					gap: 2rem;
				}

				.contact__map {
					width: 100%;
					height: 100%;
					/* background-color: aqua; */
				}
				.contact__details {
					width: 100%;
					height: 100%;
					padding: 1rem 2rem;
					/* background-color: aqua; */
				}
				.contact__map iframe {
					width: 100%;
					height: 100%;
					/* background-color: aqua; */
				}

				.contact__icon {
					width: 2rem;
					height: auto;
				}

				.phone-icon {
					width: 1.5rem;
				}

				.contact__text {
					font-size: var(--font-size-text-small);
					line-height: calc(var(--font-size-text-small) * 1.35);
					margin-bottom: 1rem;
				}

				.contact__container {
					display: flex;
					gap: 1rem;
					align-items: center;
				}

				/* extraa added later */
				.email:hover {
					text-decoration: underline;
				}
				.email-icon:hover {
					zoom: 105%;
				}
				@media screen and (max-width: 768px) {
					.contact__grid {
						display: grid;
						grid-template-columns: 2fr;
						gap: 2rem;
					}
				}

				@media screen and (max-width: 450px) {
					.contact__grid {
						display: grid;
						grid-template-columns: 2fr;
						gap: 2rem;
					}
				}
			`}</style>
			<Heading
				text={"Contact"}
				className={"mb--2 invalid-selection"}
				element="h1"
			></Heading>
			<div className="contact__grid">
				<div className="contact__details">
					<p className="contact__heading text text--normal">
						Prof. Dr. Maumita Chakraborty
					</p>
					<p className="contact__text text text--normal">
						Convener, AdComSys 2024
					</p>
					<div className="contact__container">
						<Image
							src="/assets/icons/location.png"
							alt="menu"
							width={25}
							height={25}
						/>
						<p className="contact__text text text--normal">
							University Area, Plot No. III – B/5, New Town, Action Area – III,
							Kolkata, West Bengal 700160
						</p>
					</div>
					<p className="contact__text text text--normal">
						<strong>For details you may contact the following:</strong>
					</p>
					<div className="contact__container">
						<Image
							src="/assets/icons/call.png"
							alt="menu"
							width={25}
							height={25}
						/>
						<p className="contact__text text text--normal">
							Dr. Subhalaxmi Chakraborty -{" "}
							<a
								href="mailto:subhalaxmi.chakraborty@uem.edu.in"
								className="email"
							>
								subhalaxmi.chakraborty@uem.edu.in
							</a>
						</p>
					</div>
					<div className="contact__container">
						<Image
							src="/assets/icons/call.png"
							alt="menu"
							width={25}
							height={25}
						/>
						<p className="contact__text text text--normal">
							Dr. Sudipta Basu Pal -{" "}
							<a href="mailto:sudipta.basu@uem.edu.in" className="email">
								sudipta.basu@uem.edu.in
							</a>
						</p>
					</div>
					<div className="contact__container">
						<Image
							src="/assets/icons/call.png"
							alt="menu"
							width={25}
							height={25}
						/>
						<p className="contact__text text text--normal">
							Dr. Chiradeep Mukherjee -{" "}
							<a href="mailto:chiradeep.mukherjee@uem.edu.in" className="email">
								chiradeep.mukherjee@uem.edu.in
							</a>
						</p>
					</div>
					<div className="contact__container">
						<Image
							src="/assets/icons/call.png"
							alt="menu"
							width={25}
							height={25}
						/>
						<p className="contact__text text text--normal">
							Prof. Sankhadeep Chatterjee -{" "}
							<a
								href="mailto:sankhadeep.chatterjee@uem.edu.in"
								className="email"
							>
								sankhadeep.chatterjee@uem.edu.in
							</a>
						</p>
					</div>
					<div
						onClick={() =>
							clickMailHandler(
								"adcomsys@uem.edu.in",
								"Regarding AdComSys Conference"
							)
						}
						className="contact__container"
					>
						<div className="email-icon">
							<Image
								className="email-icon"
								src="/assets/icons/email.png"
								alt="menu"
								width={25}
								height={25}
							/>
						</div>
						<p
							style={{ margin: "0", marginTop: "5px" }}
							className="contact__text text text--normal email"
						>
							<a href="mailto:adcomsys@uem.edu.in" className="email">
								adcomsys@uem.edu.in
							</a>
						</p>
					</div>
				</div>
				<div className="contact__map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.512563514172!2d88.4873264744012!3d22.559925133436433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1689485233150!5m2!1sen!2sin"
						// width="600"
						// height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						title="Map"
						// loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
