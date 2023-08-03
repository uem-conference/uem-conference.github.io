import React from "react";
import Image from "next/image";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <>
      <style jsx>{`
        .banner {
          width: 100%;
          background-color: aqua;
          display: grid;
          grid-template-columns: 1fr 6fr 1fr;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .banner__logos {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          // background-color: rgba(255, 255, 255, 0.5);
          padding: 1rem 0rem;
        }
        .banner__logo__container {
          width: 80%;
          aspect-ratio: 1;
          position: relative;
          background-color: white;
          border-radius: 1rem;
          // padding: 1rem;
        }
        .banner__logo {
          // width: 80%;
          // height: auto;
        }

        .banner__content{
          width: 60%;
          padding: 2rem 0rem;
          margin: auto;
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
        }
      `}</style>

      <section
        className={`banner`}
        style={{
          backgroundImage:
            "linear-gradient(250deg, rgba(0, 0, 0, 0.1) 75%, rgba(97, 97, 97, 0.4) 75%), linear-gradient(290deg, rgba(97, 97, 97, 0.4) 25%, rgba(0, 0, 0, 0.1) 25%),url(../assets/images/banner.png)",
        }}
      >
        <div className="banner__logos">
          <div className="banner__logo__container">
            <Image
              src={"/assets/IEM_Logo.png"}
              alt="iem logo"
              layout="fill"
              objectFit="contain"
              className="banner__logo"
            ></Image>
          </div>
          <div className="banner__logo__container">
            <Image
              src={"/assets/Logo.png"}
              alt="logo"
              layout="fill"
              objectFit="contain"
              className="banner__logo"
            ></Image>
          </div>
        </div>
        <div className="banner__content">

        <h1 className="banner__heading heading">International Conference on Advanced Computing and Systems
        <br />
        <span className="banner__heading__span">AdComSys 2024</span>
        </h1>

        </div>
        <div className="banner__logos">
          <div className="banner__logo__container">
            <Image
              src={"/assets/UEM_Logo.png"}
              alt="uem logo"
              layout="fill"
              objectFit="contain"
              className="banner__logo"
            ></Image>
          </div>
          <div className="banner__logo__container">
            <Image
              src={"/assets/Springer_Logo.png"}
              alt="springer logo"
              layout="fill"
              objectFit="contain"
              className="banner__logo"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
