import React from "react";
import { useEffect } from "react";
import { Heading } from "../../../components/pieces";
import Head from "next/head";
const organisingCommittee = require("../../../data/organising-committee");
function Organizing() {
  useEffect(() => {
    document.title =
      "Organizing Committee | Committees | " + process.env.app_name;
  }, []);
  return (
    <>
      <Head>
        <title>Organizing Committee | Committees | Your Conference Name</title>
        <meta
          name="description"
          content="Learn about the organizing committee of the conference and its members."
        />

        <meta
          property="og:title"
          content="Organizing Committee | Committees "
        />
        <meta
          property="og:description"
          content="Learn about the organizing committee of the conference and its members."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adcomsys.vercel.app/committees/organizing"
        />
        <meta
          property="og:image"
          content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
        />
        <meta property="og:image:alt" content="Your Conference Logo" />
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="Ankur Halder" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata, India" />
        <meta name="geo.position" content="22.572645;88.363892" />
        <meta name="ICBM" content="22.572645, 88.363892" />
      </Head>
      <Heading
        text={"Organising Program Committee"}
        class={"mb--2 invalid-selection"}
        element="h1"
      ></Heading>
      <div className="conference-details">
        {organisingCommittee.map((category) => {
          return (
            <section
              key={Math.random()}
              className="organizing-committee__section"
            >
              <h2 className="organizing-committee__title heading heading--3">
                {category.title}
              </h2>
              <div className="organizing-committee__grid">
                {category.data.map((individual) => {
                  return (
                    <div
                      key={Math.random()}
                      className="organizing-committee__card"
                    >
                      {Object.keys(individual).map((person, index) => {
                        if (index === 0) {
                          return (
                            <p
                              className="organizing-committee__name text text--normal"
                              key={Math.random()}
                            >
                              {individual[person]}
                            </p>
                          );
                        }
                        return (
                          <p
                            className="organizing-committee__text text text--small"
                            key={Math.random()}
                          >
                            {individual[person]}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      <style jsx>{`
        .conference-details {
          /* width: 100%; */
          /* font-family: roboto; */
          /* margin: 20px; */
          /* background-color: #f8f8f8; */
          padding: 0rem 2rem;
          /* border-radius: 10px; */
          /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
        }

        .conference-details__section {
          margin-bottom: 2rem;
        }

        .sub-heading {
          margin-bottom: 5px;
          text-transform: uppercase;
        }

        .details {
          margin: 0;
          line-height: 1.5;
          color: #2d2a2a;
        }

        .detail-label {
          font-weight: bold;
          color: #333;
        }

        .chair-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .chair-item {
          margin-bottom: 5px;
          color: #777;
        }

        .details p {
          margin-bottom: 5px;
        }

        .section:last-child {
          margin-bottom: 0;
        }

        .details p:last-child {
          margin-bottom: 0;
        }

        .section-heading {
          color: #333;
          text-transform: uppercase;
          border-bottom: 2px solid #333;
          text-align: center;
          padding-bottom: 10px;
        }

        .sub-heading {
          font-size: 22px;
          color: #555;
          margin-bottom: 8px;
        }

        .details {
          color: #777;
        }

        .detail-label {
          color: #333;
        }

        .chair-item {
          color: #555;
          font-weight: bold;
        }

        @media screen and (max-width: 768px) {
          .section-heading {
            font-size: 24px;
          }

          .sub-heading {
            font-size: 18px;
          }

          .details {
            font-size: 14px;
          }

          .chair-item {
            font-size: 14px;
          }
        }

        @media screen and (max-width: 480px) {
          .conference-details {
            padding: 20px;
          }

          .section-heading {
            font-size: 20px;
          }

          .sub-heading {
            font-size: 16px;
          }

          .details {
            font-size: 13px;
          }

          .chair-item {
            font-size: 13px;
          }
        }
        */ .organizing-committee__section {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .organizing-committee__title {
          margin: 2rem;
        }

        .organizing-committee__grid {
          // padding: 0rem 2rem;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .organizing-committee__card {
          position: relative;
          padding: 1rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          /* border: 2px solid black; */

          border-radius: 1rem;
          background: var(--color-light);
          /* box-shadow: 0.1rem 0.1rem 0.5rem var(--color-primary-light), -0.1rem -0.1rem 0.5rem var(--color-primary); */
        }

        .organizing-committee__name {
          text-align: center;
          font-weight: 500;
          /* margin-bottom: 1rem; */
          padding: 0rem 0rem 1rem;
          /* border-bottom: 2px solid var(--color-primary); */
          width: 100%;
          /* font-size: var(--font-size-text--normal); */
        }
        .organizing-committee__text {
          /* font-size: var(--font-size-text--small); */
          text-align: center;
        }

        @media screen and (max-width: 768px) {
          .organizing-committee__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-width: 450px) {
          .organizing-committee__grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </>
  );
}
export default Organizing;
