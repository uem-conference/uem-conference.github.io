import React, { useEffect, useState } from "react";
// import styles from "./settingpanel.module.css";
import { handleThemeChange, hsl } from "../../../data/colors";
import styles from "./settingpanel.module.css";

const SettingPanel = ({
  isSideNavBarVisible,
  showSideNavBar,
  setIsSettingVisible,
}) => {
  //   const [isHover, setIsHover] = useState(false);
  const [colors, setColors] = useState({});

  useEffect(() => {
    const colorObj = {
      default: {
        h: 209,
        s: 100,
        l: 38,
      },
      // give the new green color below
      first: {
        h: 140,
        s: 100,
        l: 45,
      },
      second: {
        h: 280,
        s: 100,
        l: 40,
      },
    };
    setColors(colorObj);
    // console.log(JSON.parse(localStorage.getItem("color")))
    if (localStorage.getItem("color")) {
      // console.log("object")
      localStorage.setItem("color", JSON.stringify(colorObj.default));
    }
    // console.log(JSON.parse(localStorage.getItem("color")))
    handleThemeChange(colorObj.default);
  }, []);
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
  // const handleMouseIn = () => {
  //   console.log("mouse in");
  //   let settingToolBar = document.getElementById("settingToolBar");
  //   settingToolBar.style.height = "10rem";
  //   // setIsHover(true);
  // };
  // const handleMouseOut = () => {
  //   let settingToolBar = document.getElementById("settingToolBar");
  //   settingToolBar.style.height = "0rem";
  //   // setIsHover(false);
  // };
  return (
    <div className={styles.setting_panel}>
      {/* <span className="material-symbols-outlined setting-panel__icon">settings</span> */}
      {/* <div className="setting-panel__btn" onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>S</div> */}
      <div className={styles.setting_panel__tools} id="settingToolBar">
        <div className={styles.setting_panel__colors}>
          {Object.keys(colors).map((key) => {
            return (
              <div
                key={key}
                className={styles.setting_panel__color}
                style={{
                  backgroundColor: hsl(
                    colors[key].h,
                    colors[key].s,
                    colors[key].l
                  ),
                }}
                onClick={() => {
                  handleThemeChange(colors[key]);
                  showSideNavBar();
                  setIsSettingVisible(false);
                  // toggleSideBarContainer();
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SettingPanel;
