import React from "react";
import { importantDeadlines } from "../../../data/importantDates";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Important Deadlines | Home</title>
        <meta
          name="description"
          content="Learn about the important deadlines for your conference."
        />

        <meta property="og:title" content="Important Deadlines | Home" />
        <meta
          property="og:description"
          content="Learn about the important deadlines for your conference."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adcomsys.vercel.app/authors/important-dates"
        />
        <meta
          property="og:image"
          content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
        />
        <meta property="og:image:alt" content="Important Deadlines" />
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="Ankur Halder" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="language" content="en" />
        <meta charset="UTF-8" />

        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata, India" />
        <meta name="geo.position" content="22.572645;88.363892" />
        <meta name="ICBM" content="22.572645, 88.363892" />
      </Head>

      <style jsx>{`
        .homepage__deadlines {
          width: 90%;
          margin: 2rem auto;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          /* padding: 15px; */
          background-color: var(--color-primary);
          border-radius: 1rem;
          border: var(--color-primary) 2px solid;
          font-size: clamp(1.4rem, 3vw, 1.6rem);
          height: fit-content;
          position: relative;
          /* top: 10%; */
        }

        .homepage__deadlines__heading {
          padding: 1rem;
          width: 100%;
          background-color: var(--color-primary);
          color: rgb(255, 236, 236);
          /* margin-bottom: 10px; */
          text-align: center;
          text-transform: uppercase;
          /* border-bottom: white 2px solid; */
        }

        .homepage__deadlines ul {
          width: 100%;
          display: grid;
          text-align: center;
          grid-template-columns: 5fr 4fr;
          gap: 0.2rem 0rem;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .homepage__deadlines__text {
          margin: 0;
          min-height: 5rem;
          width: 100%;
          height: 100%;
          /* padding: 5px 5px; */
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          /* border-bottom: 2px solid black; */
          /* border-radius: 5px; */
          /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); */
        }

        .homepage__deadlines__text:nth-child(even) {
          background-color: #fff;
          /* margin-bottom: 1rem; */
        }
        .homepage__deadlines__text:nth-child(odd) {
          background-color: #c4c4c4;
          /* margin-bottom: 1rem; */
        }

        @media screen and (max-width: 768px) {
          .homepage__deadlines {
            /* padding: 5px; */
            width: 80%;
            margin: 1rem auto;
            /* top: 0; */
          }
          .homepage__deadlines ul {
            // grid-template-columns: 1fr;
            /* width: 85%; */
            // gap: 0;
            /* height: auto; */
            padding: 0.3rem;
          }
          .homepage__deadlines__text:nth-child(even) {
            /* background-color: #fff; */
            /* margin-bottom: 1rem; */
            // border-bottom: 3px solid var(--color-primary);
          }
          .homepage__deadlines__text:last-child {
            /* background-color: #fff; */
            /* margin-bottom: 1rem; */
            border-bottom: none;
          }
        }

        @media screen and (max-width: 450px) {
          .homepage__about {
            width: 95%;
          }
          .homepage__grid--about {
            grid-template-columns: 1fr;
            /* gap: 2rem; */
          }
          .homepage__deadlines {
            width: 80%;
            margin: 4rem auto 2rem;
            /* padding: 2rem; */
            /* top: 0; */
          }
          .homepage__deadlines__text {
            min-height: fit-content;
            padding: 1rem;
          }
          /* .homepage__deadlines ul {
        grid-template-columns: 1fr;
        /* width: 100%;
        height: auto; *
        padding: 0.3rem;
      } */
        }
      `}</style>

      <div className="homepage__deadlines">
        <h1 className="heading heading--3 homepage__deadlines__heading">
          Important Deadlines
        </h1>
        <ul>
          {importantDeadlines.map((data, index) => (
            <li
              key={index}
              className="homepage__deadlines__text"
              dangerouslySetInnerHTML={{ __html: data }}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default index;
