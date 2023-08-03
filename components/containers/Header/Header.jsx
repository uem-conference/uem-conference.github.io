import React, { useState } from "react";
import styles from "./header.module.css";
import { Banner, NavBar, SideNavBar } from "../../pieces";

const Header = () => {
	// const [isSideNavBarVisible, setIsSideNavBarVisible] = useState(false)
	const [isSideNavBarVisible, setIsSideNavBarVisible] = useState(true)
	const showSideNavBar = ()=>{
		setIsSideNavBarVisible(!isSideNavBarVisible)
	}
	return (
		<>
			<style jsx>{`
				.marquee {
					/* height: 3rem; */
					overflow: hidden;
					position: relative;
					background-color: black;
					/* background: #fefefe; */
					color: var(--color-light);
					/* border-bottom: 2px solid var(--color-primary-dark); */
					/* border: 2px solid #187900; */
					padding: 1rem 0rem;
					
				}
				.marquee p {
					position: relative;
					/* display: inline-block; */
					white-space: nowrap;
					/* word-break: keep-all; */
					width: fit-content;
					/* height: 100%; */
					/* margin: 0; */
					/* line-height: 2rem; */
					/* text-align: center; */
					-moz-transform: translateX(100%);
					-webkit-transform: translateX(100%);
					transform: translateX(100%);
					-moz-animation: scroll-left 2s linear infinite;
					-webkit-animation: scroll-left 2s linear infinite;
					animation: scroll-left 20s linear infinite;
				}
				
				@-moz-keyframes scroll-left {
					0% {
						-moz-transform: translateX(100%);
					}
					100% {
						-moz-transform: translateX(-100%);
					}
				}
				
				@-webkit-keyframes scroll-left {
					0% {
						-webkit-transform: translateX(100%);
					}
					100% {
						-webkit-transform: translateX(-100%);
					}
				}
				
				@keyframes scroll-left {
					0% {
						-moz-transform: translateX(100%);
						-webkit-transform: translateX(100%);
						transform: translateX(100%);
					}
					100% {
						-moz-transform: translateX(-100%);
						-webkit-transform: translateX(-100%);
						transform: translateX(-100%);
					}
				}
				
			`}</style>
			<header className={"header wrapper"}>
				<Banner></Banner>
				<div className="marquee">
				<p className="invalid-selection">
					Last date of Full Paper Submission: 15th January, 2024 | Acceptance
					will be notified by 15th March, 2024 at the latest
				</p>
			</div>
				<NavBar isSideNavBarVisible={isSideNavBarVisible} showSideNavBar={showSideNavBar}></NavBar>
				<SideNavBar isSideNavBarVisible={isSideNavBarVisible} showSideNavBar={showSideNavBar}></SideNavBar>
			</header>
		</>
	);
};

export default Header;
