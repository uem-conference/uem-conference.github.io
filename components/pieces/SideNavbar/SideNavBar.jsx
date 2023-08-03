import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function SideNavBar() {
	const [isExpanded, setExpandState] = useState(false);
	const menuItems = [
		{
			text: "Home",
			icon: <span className="material-symbols-outlined">home</span>,
			link: "/",
		},
		{
			text: "About UEM",
			icon: <span class="material-symbols-outlined">school</span>,
			link: "/aboutus",
		},
		{
			text: "Committees",
			icon: <span class="material-symbols-outlined">group</span>,
			link: "/register",
		},
		// {
		// 	text: "Login",
		// 	icon: "../../../public/icons-sidenavbar/login.png",
		// 	link: "/login",
		// },
		// {
		// 	text: "Services",
		// 	icon: "../../../public/icons-sidenavbar/services.png",
		// 	link: "/services",
		// },
		// {
		// 	text: "Contact Us",
		// 	icon: "../../../public/icons-sidenavbar/contactus.png",
		// 	link: "/contactus",
		// },
		// {
		// 	text: "Settings",
		// 	icon: "../../../public/icons-sidenavbar/setting.png",
		// 	link: "/settings",
		// },
	];

	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<Image src="" alt="logo" width={50} height={50} />
							<h2>Universa</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpandState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon, link }) => (
						<Link
							key={text}
							href={link}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
						>
							{/* <Image
								className="menu-item-icon"
								src={icon}
								alt="img"
								width={65}
								height={30}
							/> */}
							{icon}
							{isExpanded && <p>{text}</p>}
						</Link>
					))}
				</div>
			</div>
			<style jsx>{`
				.side-nav-container {
					/* background-color: var(--dark); */
					background-color: rgba(6, 27, 40, 0.3);
					backdrop-filter: blur(15px);
					border-right: 1px solid rgba(6, 27, 40, 0.655);
					width: 230px;
					height: 100vh;
					position: fixed;
					color: var(--light);
					transition: 0.4s;
					z-index: 100;
					top: 0;
					left: 0;
				}
				.side-nav-container-NX {
					width: 65px;
				}

				.nav-upper,
				.nav-heading,
				.nav-menu,
				.menu-item,
				.nav-footer {
					display: grid;
				}

				.nav-heading {
					display: flex;
					margin: 0;
					padding: 0;
					position: relative;
				}

				.nav-brand {
					display: flex;
					color: var(--light);
				}
				.nav-brand img {
					margin-top: 10px;
					width: 50px;
					padding: 0 2px;
				}
				.nav-brand h2 {
					margin-top: 20px;
					font-size: 35px;
					margin-left: 5px;
				}
				.hamburger {
					background: none;
					border: none;
					cursor: pointer;
					margin: auto;
					position: relative;
					top: 15%;
				}

				.hamburger span {
					display: block;
					margin-top: 5px;
					background-color: var(--light);
					border-radius: 15px;
					height: 5px;
					width: 20px;
					transition: 0.4s;
				}

				.hamburger:hover span {
					background-color: var(--primary);
				}

				.hamburger-in:hover span:nth-child(1) {
					width: 25px;
					transform: translateY(4px) rotate(-25deg);
				}
				.hamburger-in:hover span:nth-child(2) {
					width: 40px;
				}
				.hamburger-in:hover span:nth-child(3) {
					width: 25px;
					transform: translateY(-4px) rotate(25deg);
				}

				.hamburger-out {
					margin-left: 24px;
				}
				.hamburger-out:hover span:nth-child(1) {
					width: 25px;
					transform: translate(14px, 4px) rotate(-155deg);
				}
				.hamburger-out:hover span:nth-child(2) {
					width: 40px;
				}
				.hamburger-out:hover span:nth-child(3) {
					width: 25px;
					transform: translate(14px, -4px) rotate(155deg);
				}

				.nav-menu {
					grid-template-rows: repeat(8, 1fr);
					margin-top: 50px;
				}

				.menu-item {
					display: flex;
					align-items: center;
					height: 97px;
					display: flex;
					color: var(--light);
					text-decoration: none;
					text-transform: uppercase;
					border-radius: 10px;
				}

				.menu-item-NX {
					margin: auto;
				}
				.menu-item:hover {
					background-color: var(--primary);
				}
				.menu-item img {
					width: 65px;
					height: 30px;
					padding: 0 20px;
					filter: invert(100%);
				}

				.nav-footer {
					width: 100%;
					height: 87px;
					position: absolute;
					bottom: 0;
					grid-template-rows: 1fr;
					grid-template-columns: 2fr 1fr;
				}

				.nav-details {
					display: flex;
				}
				.nav-details img {
					width: 50px;
					padding: 0 20px;
				}

				.nav-footer-user-name {
					font-size: 18px;
					font-weight: 900;
				}

				.nav-footer-user-position {
					margin-top: -15px;
					color: var(--gray);
				}
				.logout-icon {
					width: 30px;
					margin: auto;
					border-radius: 90px;
					padding: 20px;
					margin-left: 5px;
				}
				.logout-icon:hover {
					background-color: var(--primary);
				}
			`}</style>
		</div>
	);
}
