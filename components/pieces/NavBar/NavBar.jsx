import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { navMenuItems } from "../../../data/navbar";

const NavBar = ({ isSideNavBarVisible, showSideNavBar }) => {
  const [menuItems, setMenuItems] = useState(navMenuItems);

  useEffect(() => {
    if (isSideNavBarVisible) {
      document.body.classList.add("expanded");
    } else {
      document.body.classList.remove("expanded");
    }
    setMenuItems(navMenuItems);
  }, [isSideNavBarVisible]);

  const toggleSideBarContainer = () => {
    let conatiner = document.getElementById("sideNavBarContainer");
    const width = parseInt(
      window.getComputedStyle(conatiner).getPropertyValue("width").split("p")[0]
    );
    // console.log(width);
    if (width === 0) {
      conatiner.style.width = "100%";
    } else {
      conatiner.style.width = "0%";
    }
  };

  return (
    <>
      <style jsx>{`
        .navbar {
          width: 100%;
          // background-color: aqua;
          // height: 50px;
        }

        .navbar__list {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 2px;
          align-items: center;
          background-color: var(--color-light);
          padding: 2px 0px;
        }

        .navbar__menu__item {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          flex-grow: 1;
          position: relative;
          /* border-right: 1px solid white;
        border-left: 1px solid white; */
          text-align: center;
          text-transform: capitalize;
          padding: 1rem;
          cursor: pointer;
          background-color: var(--color-primary);
          transition: 0.1s linear;
          color: var(--color-light);
        }

        .navbar__menu__item:hover .navbar__sub__list {
          display: flex;
          border: 2px solid var(--color-light);
          z-index: 1000;
        }

        .navbar__sub__list {
          display: none;
          flex-direction: column;
          position: absolute;
          width: 150%;
          min-width: 20rem;
          max-width: 30rem;
          left: 0;
          background-color: var(--color-primary);
          top: calc(100%);
          padding: 0.5rem;
        }
        .navbar__sub__list > .navbar__menu__sub__item {
          width: 100%;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          text-align: left;
          padding: 1rem;
          transition: 0.3s ease-in-out;
          color: var(--color-light);
        }

        .navbar__sub__list a {
        }
        .navbar__sub__list .navbar__menu__sub__item:hover {
          background-color: var(--color-primary-light);
        }

        @media screen and (max-width: 600px) {
          .navbar__menu__item {
            display: none;
          }
          .navbar__menu__item:last-child {
            display: block;
            font-size: var(--font-size-2);
          }
        }
      `}</style>
      <nav className="navbar">
        <ul className="navbar__list">
          {menuItems.map((item) => {
            if (item.path) {
              return (
                <li className="navbar__menu__item bg-gradient--primary" key={item.path}>
                  <Link
                    href={item.path}
                    
                    style={{ color: "white" }}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            }

            return (
              <div className="navbar__menu__item bg-gradient--primary" key={item.text}>
                {item.text}
                <ul className="navbar__sub__list">
                  {item.sub.map((subItem) => {
                    return (
                      <li className="navbar__menu__sub__item" key={subItem.path}>
                        <Link
                          href={subItem.path}
                          
                          style={{ color: "white" }}
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

          <div
            className={`navbar__menu__item bg-gradient--primary`}
            onClick={() => {
              showSideNavBar();
            }}
          >
            {!isSideNavBarVisible ? (
              <span className="material-symbols-outlined">menu_open</span>
            ) : (
              <span className="material-symbols-outlined ">close</span>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
