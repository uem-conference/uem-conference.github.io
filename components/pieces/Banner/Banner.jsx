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
        align-items: center;
        gap: 1rem;
        background-color: aqua;
      }
      .banner__logo__container{
        width: 80%;
        aspect-ratio: 1;
        position: relative;
        background-color: blue;
        // padding: 1rem;
      }
      .banner__logo{
        width: 80%;
        height: auto;
      }
    `}</style>


    <section className={`banner`}>
      <div className="banner__logos">
        <div className="banner__logo__container">
          <Image src={"/assets/IEM_Logo.png"} alt='iem logo' layout='fill' className='banner__logo'></Image>
        </div>
        <div className="banner__logo__container">
          <Image src={"/assets/Logo.png"} alt='logo' layout='fill' objectFit="contain" className='banner__logo'></Image>
        </div>
      </div>
      <div className="banner__content"></div>
      <div className="banner__logos">
        <div className="banner__logo__container">
          <Image src={"/assets/UEM_Logo.png"} alt='uem logo' layout='fill' className='banner__logo'></Image>
        </div>
        <div className="banner__logo__container">
          <Image src={"/assets/Springer_Logo.png"} alt='springer logo' layout='fill' className='banner__logo'></Image>
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner
