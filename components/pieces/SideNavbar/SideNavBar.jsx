import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navMenuItems } from "@/data/navbar";
import { SettingPanel } from "..";

// export default function SideNavBar() {
// 	const [isExpanded, setExpandState] = useState(false);
// 	const menuItems = [
// 		{
// 			text: "Home",
// 			icon: "/nav-icons/home-1.png",
// 			link: "/",
// 		},
// 		{
// 			text: "About UEM",
// 			icon: "/assets/UEM_Logo.png",
// 			link: "/about-uem",
// 		},
// 		{
// 			text: "Committees",
// 			icon: "/nav-icons/committee.png",
// 			link: "/committees",
// 		},
// 		{
// 			text: "Authors",
// 			icon: "/nav-icons/authors.png",
// 			link: "/authors",
// 		},
// 		{
// 			text: "Keynote Speakers",
// 			icon: "/nav-icons/keynote-speakers.png",
// 			link: "/keynote-speakers",
// 		},
// 		{
// 			text: "Technical Programs",
// 			icon: "/nav-icons/technical-programs-new.png",
// 			link: "/technical-programs",
// 		},
// 		{
// 			text: "Registration",
// 			icon: "/nav-icons/registration.png",
// 			link: "/registration",
// 		},
// 		{
// 			text: "Contact",
// 			icon: "/nav-icons/contact.png",
// 			link: "/contact",
// 		},
// 		// {
// 		// 	text: "Settings",
// 		// 	icon: "../../../icons-sidenavbar/setting.png",
// 		// 	link: "/settings",
// 		// },
// 	];

// 	return (
// 		<div
// 			className={
// 				isExpanded
// 					? "side-nav-container"
// 					: "side-nav-container side-nav-container-NX"
// 			}
// 		>
// 			<div className="nav-upper">
// 				<div className="nav-heading">
// 					{isExpanded && (
// 						<div className="nav-brand">
// 							<Image src="" alt="logo" width={30} height={30} />
// 							<h2>AdComSys</h2>
// 						</div>
// 					)}
// 					<button
// 						className={
// 							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
// 						}
// 						onClick={() => setExpandState(!isExpanded)}
// 					>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</button>
// 				</div>
// 				<div className="nav-menu">
// 					{menuItems.map(({ text, icon, link }) => (
// 						<Link
// 							key={text}
// 							href={link}
// 							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
// 						>
// 							<Image
// 								className="menu-item-icon"
// 								src={icon}
// 								alt="img"
// 								width={65}
// 								height={30}
// 							/>
// 							{/* {icon} */}
// 							{isExpanded && <p>{text}</p>}
// 						</Link>
// 					))}
// 				</div>
// 			</div>
// 			<style jsx>{`
// 				.side-nav-container {
// 					/* background-color: var(--dark); */
// 					background-color: rgba(6, 27, 40, 0.3);
// 					backdrop-filter: blur(5px);
// 					border-right: 1px solid rgba(6, 27, 40, 0.655);
// 					width: 300px;
// 					height: 100vh;
// 					position: fixed;
// 					color: var(--light);
// 					transition: 0.4s;
// 					z-index: 100;
// 					top: 0;
// 					left: 0;
// 				}
// 				.side-nav-container-NX {
// 					width: 50px;
// 				}

// 				.nav-upper,
// 				.nav-heading,
// 				.nav-menu,
// 				.menu-item,
// 				.nav-footer {
// 					display: grid;
// 				}

// 				.nav-heading {
// 					display: flex;
// 					margin: 0;
// 					padding: 0;
// 					position: relative;
// 				}

// 				.nav-brand {
// 					display: flex;
// 					color: var(--light);
// 				}
// 				.nav-brand img {
// 					margin-top: 10px;
// 					width: 50px;
// 					padding: 0 2px;
// 				}
// 				.nav-brand h2 {
// 					margin-top: 20px;
// 					font-size: 35px;
// 					margin-left: 5px;
// 				}
// 				.hamburger {
// 					background: none;
// 					border: none;
// 					cursor: pointer;
// 					margin: auto;
// 					position: relative;
// 					top: 15%;
// 				}

// 				.hamburger span {
// 					display: block;
// 					margin-top: 5px;
// 					background-color: var(--light);
// 					border-radius: 15px;
// 					height: 5px;
// 					width: 20px;
// 					transition: 0.4s;
// 				}

// 				.hamburger:hover span {
// 					background-color: var(--primary);
// 				}

// 				.hamburger-in:hover span:nth-child(1) {
// 					width: 25px;
// 					transform: translateY(4px) rotate(-25deg);
// 				}
// 				.hamburger-in:hover span:nth-child(2) {
// 					width: 40px;
// 				}
// 				.hamburger-in:hover span:nth-child(3) {
// 					width: 25px;
// 					transform: translateY(-4px) rotate(25deg);
// 				}

// 				.hamburger-out {
// 					margin-left: 24px;
// 				}
// 				.hamburger-out:hover span:nth-child(1) {
// 					width: 25px;
// 					transform: translate(14px, 4px) rotate(-155deg);
// 				}
// 				.hamburger-out:hover span:nth-child(2) {
// 					width: 40px;
// 				}
// 				.hamburger-out:hover span:nth-child(3) {
// 					width: 25px;
// 					transform: translate(14px, -4px) rotate(155deg);
// 				}

// 				.nav-menu {
// 					grid-template-rows: repeat(8, 1fr);
// 					margin-top: 50px;
// 				}

// 				.menu-item {
// 					display: flex;
// 					align-items: center;
// 					height: 97px;
// 					display: flex;
// 					color: var(--light);
// 					text-decoration: none;
// 					text-transform: uppercase;
// 					border-radius: 10px;
// 				}

// 				.menu-item-NX {
// 					margin: auto;
// 				}
// 				.menu-item:hover {
// 					background-color: var(--primary);
// 				}
// 				.menu-item img {
// 					width: 30px;
// 					height: 30px;
// 					padding: 0 20px;
// 					// filter: invert(100%);
// 				}

// 				.nav-footer {
// 					width: 100%;
// 					height: 87px;
// 					position: absolute;
// 					bottom: 0;
// 					grid-template-rows: 1fr;
// 					grid-template-columns: 2fr 1fr;
// 				}

// 				.nav-details {
// 					display: flex;
// 				}
// 				.nav-details img {
// 					width: 50px;
// 					padding: 0 20px;
// 				}

// 				.nav-footer-user-name {
// 					font-size: 18px;
// 					font-weight: 900;
// 				}

// 				.nav-footer-user-position {
// 					margin-top: -15px;
// 					color: var(--gray);
// 				}
// 				.logout-icon {
// 					width: 30px;
// 					margin: auto;
// 					border-radius: 90px;
// 					padding: 20px;
// 					margin-left: 5px;
// 				}
// 				.logout-icon:hover {
// 					background-color: var(--primary);
// 				}
// 			`}</style>
// 		</div>
// 	);
// }

const SideNavBar = ({ isSideNavBarVisible, showSideNavBar }) => {
	const [menuItems, setMenuItems] = useState(navMenuItems);
	const [isSettingVisible, setIsSettingVisible] = useState(false);
	// const [isExpanded]

	function changePage(link) {
		window.parent.postMessage({ action: 'changeURL', newURL: link }, '*');
	}


	return (
		<>
			<style jsx>{`
				.sideNavBar__conatiner {
					background-color: rgba(0, 0, 0, 0.5);
					backdrop-filter: blur(5px);
					transition: 0.3s ease-in-out;
					position: fixed;
					top: 0;
					left: 0;
					bottom: 0;
					overflow: hidden;
					z-index: 10000;
				}
				.sideNavBar {
					background-color: var(--dark);
					transition: 0.3s ease-in-out;
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					width: 100%;
					max-width: 30rem;
					display: flex;
					flex-direction: column;
					// justify-content: space-between;
					padding: 1rem;
				}
				.sideNavBar__top {
					display: grid;
					grid-template-columns: 1fr 4fr;
					padding: 0rem 0rem 1rem;
					border-bottom: 2px solid white;
				}
				.sideNavBar__logo__container {
					width: 100%;
					aspect-ratio: 1;
					position: relative;
				}
				.sideNavBar__name {
					width: 100%;
					color: var(--light);
					// aspect-ratio: 1;
					// position: relative;
					font-size: 2.5rem;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.sideNavBar__middle {
					padding: 2rem 1rem;
				}

				.sideNavBar__list {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
				}

				.sideNavBar__menu__item {
					width: 100%;
					padding: 1rem;
					text-align: center;
					background-color: var(--color-primary-dark);
					cursor: pointer;
					position: relative;
					border-radius: 1rem;
					color: white;
					transition: 0.3s ease-in-out;
				}
				.sideNavBar__menu__item:hover {
					background-color: var(--color-primary);
					border-radius: 1rem 1rem 0rem 0rem;
				}
				.sideNavBar__menu__item:hover .sideNavBar__sub__list {
					display: flex;
					flex-direction: column;
					gap: 0.2rem;
					padding: 0.5rem;
				}

				.sideNavBar__sub__list {
					position: absolute;
					z-index: 1;
					top: 100%;
					left: 0;
					width: 100%;
					display: none;
					background-color: var(--color-primary);
				}

				.sideNavBar__menu__sub__item {
					width: 95%;
					margin: auto;
					padding: 1rem;
					text-align: center;
					cursor: pointer;
					background-color: var(--color-primary);
					font-size: 1.4rem;
				}
				.sideNavBar__menu__sub__item:hover {
					background-color: var(--color-primary-light);
				}

				.sideNavBar__btn {
					width: 5rem;
					aspect-ratio: 1;
					position: absolute;
					right: 0%;
					border-radius: 50rem 0rem 50rem 50rem;
					background-color: var(--color-primary);
					color: white;
					border: 2px solid var(--color-light);
					outline: 2px solid var(--color-light);
					outline-offset: 2px;
					// z
				}

				.sideNavBar__bottom {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					padding: 1rem;
					// overflow: hi
				}

				.sideNavBar__setting__container {
					margin-top: 1rem;
					overflow: hidden;
					height: 0;
				}
			`}</style>
			<div
				className="sideNavBar__conatiner"
				style={isSideNavBarVisible ? { width: "100%" } : { width: "0px" }}
			>
				<button className="sideNavBar__btn" onClick={showSideNavBar}>
					{!isSideNavBarVisible ? (
						<Image
							style={{ filter: "brightness(0) invert(1)" }}
							src="/nav-icons/menu.png"
							alt="menu"
							width={20}
							height={20}
						></Image>
					) : (
						<Image
							style={{ filter: "brightness(0) invert(1)" }}
							src="/nav-icons/close.png"
							alt="menu"
							width={25}
							height={25}
						></Image>
					)}
				</button>
				<div className="sideNavBar">
					<div className="sideNavBar__top">
						<div className="sideNavBar__logo__container">
							<Image
								src={"/assets/Logo.png"}
								layout="fill"
								objectFit="contain"
								alt="logo"
							></Image>
						</div>
						<div className="sideNavBar__name">AdComSys 2024</div>
					</div>
					<div className="sideNavBar__middle">
						<ul className="sideNavBar__list">
							{menuItems.map((item) => {
								if (item.path) {
									return (
										<li className="sideNavBar__menu__item" key={item.path}>
											<Link
												href={item.endpoint}
												style={{ color: "white" }}
												onClick={() => {
													changePage(item.path);
													showSideNavBar()
												}}
											>
												{item.text}
											</Link>
										</li>
									);
								}

								return (
									<div className="sideNavBar__menu__item " key={item.text}>
										<p>{item.text}</p>
										<ul className="sideNavBar__sub__list">
											{item.sub.map((subItem) => {
												return (
													<li
														className="sideNavBar__menu__sub__item"
														key={subItem.path}
													>
														<Link
															href={subItem.endpoint}
															key={subItem.path}
															style={{ color: "white" }}
															onClick={() => {
																changePage(subItem.path);
																showSideNavBar()
															}}
														>
															{subItem.text}
														</Link>
													</li>
												);
											})}
										</ul>
									</div>
								);
							})}
						</ul>
					</div>

					<div className="sideNavBar__bottom">
						<div
							className="btn--settings sideNavBar__menu__item"
							onClick={() => {
								setIsSettingVisible(!isSettingVisible);
							}}
						>
							{/* <span className="material-symbols-outlined">
								{isSettingVisible ? "close" : "widgets"}
							</span> */}
							{isSettingVisible ? (
								<Image
									style={{ filter: "brightness(0) invert(1)" }}
									src="/nav-icons/close.png"
									alt="menu"
									width={30}
									height={30}
								></Image>
							) : (
								<span className="theme">THEME</span>
							)}
						</div>
						<div
							className={"sideNavBar__setting__container"}
							style={
								isSettingVisible ? { height: "fit-content" } : { height: "0" }
							}
						>
							<SettingPanel
								isSideNavBarVisible={isSideNavBarVisible}
								showSideNavBar={showSideNavBar}
								setIsSettingVisible={setIsSettingVisible}
							></SettingPanel>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideNavBar;
