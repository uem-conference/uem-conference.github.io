import React from 'react'
import Image from "next/image"
import styles from "./banner.module.css"

const Banner = () => {
  return (
    <>
    <style jsx>{`
      .banner{
        width: 100%;
        background-color: aqua;
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
      }
      .banner__logos{
        width: 100%;
        display: flex;
        flex-direction: column;

        background-color: aqua;
      }
      .banner__logo__container{
        width: 90%;
        aspect-ratio: 1;
        background-color: blue;
      }
    `}</style>


    <section className={`banner`}>
      <div className="banner__logos">
        <div className="banner__logo__container">
          <Image src={"/assets/Logo.png"} alt='logo' layout='fill' className='banner__logo'></Image>
        </div>
      </div>
      <div className="banner__content"></div>
      <div className="banner__logos"></div>
    </section>
    </>
  )
}

export default Banner
