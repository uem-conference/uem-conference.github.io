import React from "react";
import styles from "./header.module.css";
import { Banner, NavBar, SideNavBar } from "../../pieces";

const Header = () => {
	return (
		<header>
			Header
			<Banner></Banner>
			<NavBar></NavBar>
			<SideNavBar></SideNavBar>
		</header>
	);
};

export default Header;
