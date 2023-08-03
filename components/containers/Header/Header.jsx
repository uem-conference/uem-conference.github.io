import React from "react";
import styles from "./header.module.css";
import { Banner, NavBar } from "../../pieces";

const Header = () => {
  return (
    <>
      <style jsx>{`
      .header{
        color: red;
      }
      `}</style>
      <header className={"header wrapper"}>
        Header
        <Banner></Banner>
        <NavBar></NavBar>
      </header>
    </>
  );
};

export default Header;
