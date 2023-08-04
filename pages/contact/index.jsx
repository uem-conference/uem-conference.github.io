import React, { useEffect } from "react";
import { Heading } from "../../components/pieces";

const ContactPage = () => {
	useEffect(() => {
		document.title = "Contact | " + process.env.app_name;
	}, []);
	function clickMailHandler() {
		const email = "adcomsys@uem.edu.in";
		const subject = "Regarding AdComSys Conference";
		const body =
			"Hello, I would like to inquire about the AdComSys Conference.";

		const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailtoUrl;
	}

	return (
		<>
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
					zoom: 120%;
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
			<Heading text={"Contact"} className={"mb--2 invalid-selection"}></Heading>
			<div className="contact__grid">
				<div className="contact__details">
					<p className="contact__heading text text--normal">
						Prof. Dr. Maumita Chakraborty
					</p>

					<p className="contact__text text text--normal">
						Convener, AdComSys 2024{" "}
					</p>
					<div className="contact__container">
						<span className="material-symbols-outlined contact__icon address-icon">
							map
						</span>
						<p className="contact__text text text--normal">
							University Area, Plot No. III – B/5, New Town, Action Area – III,
							Kolkata, West Bengal 700160{" "}
						</p>
					</div>

					<p className="contact__text text text--normal">
						<strong>For details you may contact the following:</strong>
					</p>
					<div className="contact__container">
						<span className="material-symbols-outlined contact__icon phone-icon">
							phone_in_talk
						</span>
						<p
							style={{ margin: "0", marginBottom: "5px" }}
							className="contact__text text text--normal"
						>
							Dr. Chiradeep Mukherjee - 9804244362
						</p>
					</div>
					<div className="contact__container">
						<span className="material-symbols-outlined contact__icon phone-icon">
							phone_in_talk
						</span>
						<p
							style={{ margin: "0", marginBottom: "5px" }}
							className="contact__text text text--normal"
						>
							Dr. Subhalaxmi Chakraborty - 7003720703
						</p>
					</div>
					<div onClick={clickMailHandler} className="contact__container">
						<span className="material-symbols-outlined contact__icon email-icon">
							mail
						</span>
						<p
							style={{ margin: "0", marginTop: "5px" }}
							className="contact__text text text--normal email"
						>
							adcomsys@uem.edu.in
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
