import React from "react";
import Image from "next/image";
import styles from "./banner.module.css";

const Banner = () => {
	return (
		<>
			<style jsx>{`
				.banner {
					width: 100%;
					background-color: aqua;
					display: grid;
					grid-template-columns: 1fr 6fr 1fr;
					background-size: cover;
					background-repeat: no-repeat;
					padding: 1rem;
					position: relative;
				}

				.banner::before {
					// content: "";
					position: absolute;
					width: 100%;
					height: 1.5rem;
					bottom: -0.75rem;
					background-image: linear-gradient(
						to bottom,
						transparent,
						black,
						transparent
					);
				}
				.banner__logos {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					gap: 1rem;
					// background-color: rgba(255, 255, 255, 0.5);
					padding: 1rem 0rem;
				}
				.banner__logo__container {
					width: 80%;
					aspect-ratio: 1;
					position: relative;
					background-color: white;
					border-radius: 1rem;
					// padding: 1rem;
					border: 2px solid white;

					box-shadow: 0px 0px 5px white, 0px 0px 10px white, 0px 0px 15px white;
				}
				.banner__logo {
					// width: 80%;
					// height: auto;
				}

				.banner__content {
					width: 60%;
					// margin: 1rem;
					padding: 1rem 1rem;
					margin: auto;
					background-color: rgba(255, 255, 255, 0.05);
					backdrop-filter: blur(10px);
					border-radius: 1rem;
					text-align: center;
					color: white;
					display: flex;
					flex-direction: column;
					align-items: center;
					border: 1px solid rgba(255, 255, 255, 0.2);
				}

				.banner__heading {
					font-size: 1.8rem;
					line-height: 3rem;
					font-weight: 400;
				}
				.banner__heading__span {
					font-size: 1.5em;
					line-height: 2em;
					font-family: var(--font-russo);
					letter-spacing: 4px;
				}

				.banner__text {
					font-size: var(--font-size-text-small);
					line-height: 2.1rem;
					letter-spacing: 1px;
					/* opacity: 0.8; */
				}

				.banner__date {
					// opacity: 1;
					margin: 1rem 0.5rem 0.5rem;
					font-weight: 600;
					font-size: var(--font-size-text-big);
				}

				.banner__line {
					width: 80%;
					margin: auto;
					border: 1px solid white;
					margin: 1rem 0rem;
					opacity: 0.5;
				}

				@media screen and (max-width: 820px) {
					.banner__content {
						width: 70%;
						// margin: auto;
					}
				}
				@media screen and (max-width: 700px) {
					.banner__content {
						width: 80%;
						// margin: auto;
					}
				}
				@media screen and (max-width: 600px) {
					.banner__content {
						width: 90%;
						// margin: auto;
					}
				}
				@media screen and (max-width: 450px) {
					.banner {
						grid-template-columns: 1fr;
					}
					.banner__logos {
						flex-direction: row;
					}
					.banner__logo__container {
						width: 15%;
					}
					.banner__content {
						width: 90%;
						// margin: auto;
					}
				}
			`}</style>

			<section
				className={`banner`}
				style={{
					backgroundImage:
						"linear-gradient(250deg, rgba(0, 0, 0, 0.1) 70%, rgba(255, 255, 255, 0.2) 70%), linear-gradient(290deg, rgba(255, 255, 255, 0.2) 30%, rgba(0, 0, 0, 0.1) 30%),url(../assets/images/banner.png)",
				}}
			>
				<div className="banner__logos">
					<div className="banner__logo__container">
						<Image
							src={"/assets/IEM_Logo.png"}
							alt="iem logo"
							layout="fill"
							objectFit="contain"
							className="banner__logo"
						></Image>
					</div>
					<div className="banner__logo__container">
						<Image
							src={"/assets/Logo.png"}
							alt="logo"
							layout="fill"
							objectFit="contain"
							className="banner__logo"
						></Image>
					</div>
				</div>
				<div className="banner__content">
					<h1 className="banner__heading">
						First International Conference on Advanced Computing and Systems
						<br />
						<span className="banner__heading__span">AdComSys 2024</span>
					</h1>
					<hr className="banner__line" />
					<p className={`banner__text`}>Organized by:</p>
					<p className={`banner__text`}>
						Department of Computer Science and Technology & <br /> Computer
						Science and Information Technology <br />
						(CST & CSIT)
					</p>
					<p className={`banner__text`}>
						University of Engineering and Management, Kolkata
					</p>
					<hr className="banner__line" />
					<p className={`banner__text banner__date`}>
						26th and 27th June, 2024
					</p>
				</div>
				<div className="banner__logos">
					<div className="banner__logo__container">
						<Image
							src={"/assets/UEM_Logo.png"}
							alt="uem logo"
							layout="fill"
							objectFit="contain"
							className="banner__logo"
						></Image>
					</div>
					<div className="banner__logo__container">
						<Image
							// src={"/assets/Springer_Logo.png"}
							src={"/assets/independence.png"}
							alt="independence logo"
							layout="fill"
							objectFit="contain"
							className="banner__logo"
						></Image>
					</div>
					{/* <div className="banner__logo__container">
            <Image
              // src={"/assets/Springer_Logo.png"}
              src={"/assets/Logo.png"}
              alt="springer logo"
              layout="fill"
              objectFit="contain"
              className="banner__logo"
            ></Image>
          </div> */}
				</div>
			</section>
		</>
	);
};

export default Banner;
