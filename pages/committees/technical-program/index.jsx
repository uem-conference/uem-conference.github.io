import React from "react";
import { useEffect } from "react";
import { Heading } from "../../../components/pieces";
const technicalProgramCommittee = require("../../../data/technical-program-committee");
function TechnicalProgramCommittee() {
	useEffect(() => {
		document.title = "Organising Committee | " + "ICACS";
	}, []);
	return (
		<>
			<Heading
				text={"Technical Program Committee"}
				class={"mb--2 invalid-selection"}
			></Heading>
			<div className="technical-program-committee">
				<div className="technical-program-committee__grid">
					{technicalProgramCommittee.map((member, index) => {
						return (
							<div
								key={Math.random()}
								className="technical-program-committee__card"
							>
								<p className="technical-program-committee__card_number">
									{index + 1}
								</p>
								<p className="technical-program-committee__text technical-program-committee__name text text--small">
									{member.name}
								</p>
								<p
									className="technical-program-committee__text 
			technical-program-committee__affiliation text text--small"
								>
									{member.affiliation}
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<style jsx>{`
				.technical-program-committee {
					/* width: 100%; */
					/* font-family: roboto; */
					/* margin: 20px; */
					/* background-color: #f8f8f8; */
					padding: 0rem 2rem;
					/* border-radius: 10px; */
					/* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
				}

				.committee-heading {
					margin-bottom: 20px;
					text-transform: uppercase;
					text-align: center;
					padding-bottom: 10px;
					border-bottom: 2px solid #333;
				}

				.committee-members-list {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				.committee-member {
					margin-bottom: 15px;
					line-height: 1.5;
					display: flex;
					align-items: center;
				}

				.member-index {
					font-weight: bold;
					margin-right: 10px;
					color: #333;
					font-size: 16px;
				}

				.member-name {
					font-weight: bold;
					color: #333;
					font-size: 18px;
					transition: color 0.3s;
					margin-left: 2px;
					color: var(--color-primary);
				}

				.member-affiliation {
					color: #2d2a2a;
					/* font-size: 16px; */
					margin-left: 5px;
				}

				.technical-program-committee__card {
					position: relative;
					padding: 2rem 2.5rem;
					min-height: 10rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					gap: 0.3rem;
					/* border: 2px solid black; */

					border-radius: 1rem;
					background: var(--color-light);
					/* box-shadow: 0.1rem 0.1rem 0.5rem var(--color-primary-light), -0.1rem -0.1rem 0.5rem var(--color-primary); */
				}

				.technical-program-committee__text {
					/* font-size: var(--font-size-text--small); */
					text-align: center;
				}

				.technical-program-committee__grid {
					width: 100%;
					margin: 4rem 0rem 2rem;
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 2rem;
				}

				.technical-program-committee__card_number {
					position: absolute;
					top: 0.5rem;
					right: 1rem;
					font-size: 2rem;
					font-weight: 900;
					color: var(--color-primary-dark);
					opacity: 0.25;
					z-index: 0;
				}
				.technical-program-committee__name {
					font-size: 1.6rem;
					font-weight: 500;
					margin-bottom: 0.5rem;
					color: var(--color-primary-dark);
				}
				.technical-program-committee__affiliation {
					font-size: 1.3rem;
					/* font-weight: 500; */
					color: var(--color-primary);
				}

				@media screen and (max-width: 768px) {
					.technical-program-committee__grid {
						grid-template-columns: repeat(2, 1fr);
					}
				}

				@media screen and (max-width: 450px) {
					.technical-program-committee__grid {
						grid-template-columns: repeat(1, 1fr);
					}
				}
			`}</style>
		</>
	);
}
export default TechnicalProgramCommittee;