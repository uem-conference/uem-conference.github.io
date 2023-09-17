import React from "react";
import Link from "next/link";
// import styles from "./footer.module.css";
// import { classNameFormatter } from "@/functions/classNameFormatter";
import { navMenuItems } from "@/data/navbar";

export default function Footer() {
	// const [menuItems, setMenuItems] = useState(navMenuItems);

	// useEffect(() => {
	//   if (menuItems) {
	//     setMenuItems(navMenuItems);
	//   }
	// }, [menuItems]);
	return (
		<>
			<style jsx>{`
				/* footer.css */

				/* Footer container */
				.footer {
					background-color: #333;
					color: #fff;
					padding: 2rem 1rem;
				}

				/* Footer content container */
				.footer_content {
					text-align: center;
					margin-bottom: 20px;
					padding: 0rem 0rem 1rem;
					border-bottom: 2px solid white;
				}

				/* Footer text */
				.footer_content span {
					font-size: var(--font-size-text-small);
					opacity: 0.7;
				}

				.footer__list_container {
					width: 100%;
				}
				/* Footer list */
				.footer_list {
					width: 100%;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					gap: 1rem 2rem;
					/* list-style-type: none; */
					margin: 0;
					padding: 0;
					/* display: flex;*/
					justify-content: center;
				}

				/* Footer list item */
				.footer__list_option {
					flex-grow: 1;
					color: #fff;
					font-size: 14px;
					/* margin: 0 15px; */
					text-transform: uppercase;
					opacity: 0.7;
					transition: opacity 0.3s ease;
					text-decoration: none;
				}
				.footer__list_option:hover {
					text-decoration: underline;
				}

				/* Footer list item link */
				.footer_item {
					// text-decoration: none;
					color: #fff;
				}

				/* Footer list item link hover */
				.footer_item:hover {
					opacity: 1;
					text-decoration: underline;
				}

				/* Footer list item link active */
				.footer_item.active {
					font-weight: bold;
				}

				/* Footer list item link active hover */
				.footer_item.active:hover {
					opacity: 1;
				}

				/* Add some animation effects */
				@keyframes fadeIn {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}

				/* Apply animation to footer content */
				.footer_content,
				.footer_list {
					animation: fadeIn 0.8s ease;
				}

				/* Media queries for responsiveness */
				@media screen and (max-width: 600px) {
					.footer_list {
						flex-wrap: wrap;
					}
					.footer__list_option {
						font-size: 1.2rem;
					}
				}

				@media screen and (min-width: 601px) and (max-width: 900px) {
					/* .footer-list-option {
        margin: 0 10px;
      } */
				}

				/* @media screen and (min-width: 901px) and (max-width: 1200px) {
      .footer-list-option {
        margin: 0 20px;
      }
    } */
			`}</style>
			<footer className={"footer wrapper invalid-selection"}>
				<div className={"footer_content"}>
					<span>&copy; 2024 UEM. All rights reserved.</span>
				</div>
				<div className={"footer__list_container"}>
					<ul className={"footer_list"}>
						{navMenuItems.map((item) => {
							if (item.path) {
								return (
									<Link
										// key={Math.random()}
										href={item.path}
										key={Math.random()}
										className={`footer_item`}
										style={{ color: "white" }}
									>
										<li key={Math.random()} className={`footer__list_option`}>
											{item.text}
										</li>
									</Link>
								);
							}
							const l = item.sub.map((subItem) => {
								return (
									<Link
										href={subItem.path}
										key={Math.random()}
										className={`footer_item`}
										style={{ color: "white" }}
									>
										<li className={`footer__list_option`}>{subItem.text}</li>
									</Link>
								);
							});
							return l;
						})}
					</ul>
				</div>
			</footer>
		</>
	);
}
