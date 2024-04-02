/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import styles from "./header.module.css";
import { Banner, NavBar, SideNavBar } from "../../pieces";
import Image from "next/legacy/image";

const Header = () => {
  const [isSideNavBarVisible, setIsSideNavBarVisible] = useState(false);
  // const [isSideNavBarVisible, setIsSideNavBarVisible] = useState(true)
  const showSideNavBar = () => {
    setIsSideNavBarVisible(!isSideNavBarVisible);
  };
  return (
    <>
      <style jsx>{`
        .marquee__container {
          width: 100%;
          display: grid;
          gap: 2rem;
          background-color: black;
          grid-template-columns: 11fr 1fr;
        }
        .marquee {
          // height: 6rem;
          overflow: hidden;
          position: relative;
          background-color: black;
          color: var(--color-light);
          padding: 1rem 0rem;
          display: flex;
          align-items: center;
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

        .marquee__logo__container {
          position: relative;
          //   top: 0;
          //   bottom: 0;
          //   right: 0;
          width: 100%;
          height: 95%;
          box-shadow: 0 0 0.5rem white, 0 0 1rem white, 0 0 1.5rem white,
            0 0 2.5rem white, 0 0 3.5rem white;
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

        @media screen and (max-width: 450px) {
          .marquee__container {
            grid-template-columns: 3fr 1fr;
          }
        }
      `}</style>
      <header className={"header wrapper"}>
        <Banner></Banner>
        <div className="marquee__container">
          <div className="marquee">
            {/* <p className="invalid-selection">
              Last date of Full Paper Submission:{" "}
              <span style={{ textDecoration: "line-through" }}>28.02.2024</span>
              <span> {"  "}15.03.2024</span>
            </p> */}
            <p className="invalid-selection">
              Last date of Full Paper Submission:{" "}
              <span style={{ textDecoration: "line-through" }}>15.03.2024</span>
              <span> (closed)</span> | The notifications to the submitting
              authors will be sent from 02.04.2024 onwards.
            </p>
          </div>

          {/* UNCOMMENT THE BELOW CODE TO PUT ON THE SPRINGER LOGO */}
          <div className="marquee__logo__container">
            <Image
              src={"/assets/Springer_Logo.png"}
              //   src={"/assets/SLogo.png"}
              alt="springer logo"
              layout="fill"
              objectFit="contain"
              className="banner__logo"
            ></Image>
          </div>
        </div>
        <div
          style={{
            padding: "5px",
            textAlign: "center",
            fontSize: "15px",
            letterSpacing: "1px",
            color: "red",
          }}
        >
          <p className="invalid-selection">
            All accepted and presented papers will be published by the{" "}
            <strong>Web of Science (WoS)</strong> indexed{" "}
            <strong>
              Springer Nature Book Series "Algorithms for Intelligent Systems"
            </strong>
            <a target="_blank" href="https://www.springer.com/series/16171">
              (https://www.springer.com/series/16171)
            </a>
          </p>
        </div>
        <NavBar
          isSideNavBarVisible={isSideNavBarVisible}
          showSideNavBar={showSideNavBar}
        ></NavBar>
        <SideNavBar
          isSideNavBarVisible={isSideNavBarVisible}
          showSideNavBar={showSideNavBar}
        ></SideNavBar>
      </header>
    </>
  );
};

export default Header;
