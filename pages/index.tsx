/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-unescaped-entities */
import { Carousel, Heading } from "@/components/pieces";
import { useEffect } from "react";
import { importantDeadlines } from "../data/importantDates";
import FlagCounter from "../components/pieces/FlagCounter/FlagCounter";
import Head from "next/head";
import Image from "next/image";
const HomePage = () => {
  // code to check common names
  const uniqueInternationalAdvisoryCommittee = require("../data/international-advisory-committee");
  const uniqueTechnicalProgramCommittee = require("../data/technical-program-committee");
  function removeSpaces(str: string) {
    return str.replace(/\s+/g, "");
  }

  function findCommonNames(arr1: any[], arr2: any[]) {
    const commonNames = arr1.filter((item1: { name: any }) =>
      arr2.some(
        (item2: { name: any }) =>
          removeSpaces(item2.name) === removeSpaces(item1.name)
      )
    );
    return commonNames;
  }

  const commonNames = findCommonNames(
    uniqueInternationalAdvisoryCommittee,
    uniqueTechnicalProgramCommittee
  );

  // console.log(commonNames);
  // end of common code check function
  useEffect(() => {
    document.title = "Home | " + process.env.app_name;
  }, []);
  return (
    <>
      <Head>
        <title>Home | AdComSys Conference</title>
        <meta
          name="description"
          content="International Conference on Advanced Computing and Systems - AdComSys 2024"
        />
        <meta
          name="keywords"
          content="AdComSys, conference, computing, systems, AI, IoT, cybersecurity, blockchain, adcomsys 2024"
        />

        <meta property="og:title" content="AdComSys Conference" />
        <meta
          property="og:description"
          content="International Conference on Advanced Computing and Systems - AdComSys 2024"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adcomsys.vercel.app/" />
        <meta
          property="og:image"
          content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
        />
        <meta property="og:image:alt" content="AdComSys Conference Logo" />
        <meta property="og:locale" content="en_US" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="Ankur Halder" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata, India" />
        <meta name="geo.position" content="22.572645;88.363892" />
        <meta name="ICBM" content="22.572645, 88.363892" />
      </Head>

      <style jsx>{`
        .homepage {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 4rem 0rem;
        }

		.homepage__image-group{
			display: flex;
			align-items: center;
		}

        .homepage__section {
          padding: 1rem 2rem;
          /* border: 2px solid black; */
          /* height: 10rem; */
        }

        .homepage__grid--about {
          display: grid;
          grid-template-columns: 5fr 3fr;
          /* gap: 2rem; */
        }

        .homepage__about {
          /* padding-top: 2rem; */
          // padding-left: 2rem;
          width: 90%;
          /* margin: auto; */
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .homepage__heading {
          width: 100%;
        }

        .homepage__text {
          font-size: clamp(1.4rem, 3vw, 1.6rem);
          width: 90%;
          text-align: justify;
          line-height: clamp(2.1rem, 4.5vw, 2.4rem);
        }

        .homepage__announcements {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4rem;
        }
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
          .homepage__grid--about {
            grid-template-columns: 1fr 1fr;
          }
          .homepage__about {
            width: 90%;
          }
          .homepage__deadlines {
            /* padding: 5px; */
            width: 80%;
            margin: 1rem auto;
            /* top: 0; */
          }
          .homepage__deadlines ul {
            grid-template-columns: 1fr;
            /* width: 85%; */
            gap: 0;
            /* height: auto; */
            padding: 0.3rem;
          }
          .homepage__deadlines__text:nth-child(even) {
            /* background-color: #fff; */
            /* margin-bottom: 1rem; */
            border-bottom: 3px solid var(--color-primary);
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
        }
      `}</style>

      <Carousel></Carousel>
      <div className="homepage">
        <section className="homepage__grid--about">
          <div className="homepage__about">
            <Heading
              text={"About AdComSys"}
              class={"homepage__heading my--2"}
              element="h1"
            ></Heading>
            <p className="homepage__text text text--normal">
              The International Conference on Advanced Computing and Systems
              (AdComSys) will foster an excellent international forum for
              exchanging knowledge and the recent developments in theory,
              methodologies and applications in Artificial Intelligent (AI)
              systems, Internet of Things (IoT) systems, Cybersecurity and
              Blockchain systems and emerging computing techniques. The AdcomSys
              aims to encourage the intense dialogues between academia and
              industry to bridge the gap between scholarly research, industrial
              initiatives and governmental policymaking. AdComsys 2024 will
              attribute to the diverse spectrum of keynote addresses, technical
              tracks, panel discussions and industry exhibits where academia can
              view state-of-the-art findings from the trials and
              interoperability experiments. Furthermore, the industry will
              benefit from exposure to leading-edge research and an opportunity
              to interact and fraternize with academic researchers on real-world
              issues.
              <br /> The purpose of AdComSys 2024 is to solicit original
              research and technical papers from researchers, scientists,
              academicians, industry professionals and students to report their
              experience, new ideas and research results about advanced
              computing and systems to discuss the practical challenges
              encountered and solutions adopted. <br /> AdComSys 2024 will be
              held at the University of Engineering and Management, Kolkata, on
              June 26th-27th, 2024.
              <br />
              <br />
              To download AdComSys Brochure, please{" "}
              <a
                href="/assets/downloads/AdComSys 2024 Brochure.pdf"
                target="_blank"
              >
                click here
              </a>
            </p>
          </div>
          <div className="homepage__right">
            <div className="homepage__announcements">
              <Heading
                text={"Announcements"}
                class={"homepage__heading my--2"}
                element="h3"
              ></Heading>

              {/* <p className="homepage__text text text--normal">
								All accepted and presented papers will be published by Springer
								Book Series(Approval Pending).
							</p> */}

              <p className="invalid-selection homepage__text text text--normal">
                All accepted and presented papers will be published by the{" "}
                <strong>Web of Science (WoS)</strong> indexed
                <strong>
                  {" "}
                  Springer Nature Book Series "Algorithms for Intelligent
                  Systems"
                </strong>
                <a target="_blank" href="https://www.springer.com/series/16171">
                  (https://www.springer.com/series/16171)
                </a>
              </p>
              <Image
                style={{ margin: "2rem 0" }}
                src={"/AIS-springer.jpg"}
                alt="springer"
                width={120}
                height={190}
              ></Image>
              <strong className="homepage__text text text--normal">
                This book-series is indexed in Web of Science and zbMath
              </strong>

              <div className="homepage__image-group">
                <div className="homepage__image">
                  <Image
                    style={{ marginRight: "4rem" }}
                    src={"/WebofScience.png"}
                    alt="Web of Science"
                    width={100}
                    height={120}
                  ></Image>
                </div>
                <div className="homepage__image">
                  <Image
                    style={{ marginLeft: "4rem" }}
                    src={"/ZbMath.png"}
                    alt="zbMath"
                    width={140}
                    height={80}
                  ></Image>
                </div>
              </div>
            </div>

            <div className="homepage__deadlines">
              <h2 className="heading heading--3 homepage__deadlines__heading">
                Important Deadlines
              </h2>
              <ul>
                {importantDeadlines.map((data) => {
                  return (
                    <p
                      key={Math.random()}
                      className="homepage__deadlines__text"
                    >
                      {data}
                    </p>
                  );
                })}
              </ul>
            </div>
            <FlagCounter></FlagCounter>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
