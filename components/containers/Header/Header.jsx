import React from "react";
import styles from "./header.module.css";
import { Banner, NavBar, SideNavBar } from "../../pieces";

const Header = () => {
	return (
		<>
			<style jsx>{`
				.header {
					color: red;
				}
			`}</style>
			<header className={"header wrapper"}>
				<Banner></Banner>
				<NavBar></NavBar>
				<SideNavBar></SideNavBar>
			</header>
		</>
	);
};

export default Header;
