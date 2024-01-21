/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
// import "./aboutuem.css";
import { Heading } from "../../components/pieces";
import Link from "next/link";
import Head from "next/head";
export default function AboutUem() {
  useEffect(() => {
    document.title = "About UEM | " + process.env.app_name;
  }, []);
  return (
    <>
      <Head>
        <title>About UEM </title>
        <meta
          name="description"
          content="Learn about University of Engineering & Management (UEM) and its vision, mission, and values."
        />

        <meta property="og:title" content="About UEM | Your Conference Name" />
        <meta
          property="og:description"
          content="Learn about University of Engineering & Management (UEM) and its vision, mission, and values."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adcomsys.vercel.app/about-uem"
        />
        <meta
          property="og:image"
          content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
        />
        <meta property="og:image:alt" content="UEM Logo" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="About UEM | Your Conference Name" />
        <meta
          name="twitter:description"
          content="Learn about University of Engineering & Management (UEM) and its vision, mission, and values."
        />

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

      <style jsx>{`
        .about-uem {
          background-image: var(--color-primary-light);
          margin-bottom: 20px;
        }

        .about-uem-content {
          margin: 0 auto;
        }
        .title {
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .description {
          margin-bottom: 20px;
        }

        .sub-title {
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .list-item {
          list-style-type: none;
          padding-left: 20px;
          color: var(--pure-black);
          background-image: url(../../assets/icons//dot-2.png);
          background-repeat: no-repeat;
          background-size: 8px;
          background-position: left top;
          background-position-x: 0px;
          background-position-y: 6px;
        }

        .list {
          margin-left: 20px;
          padding-left: 20px;
        }

        .sub-list {
          list-style-type: none;
          color: var(--pure-black);
        }
        .sub-list li {
          margin-left: 20px;
          padding-left: 20px;
          background-image: url(../../assets/icons/dot-1.png);
          background-repeat: no-repeat;
          background-size: 5px;
          background-position: left top;
          background-position-x: 2px;
          background-position-y: 6px;
        }
        .section {
          margin-bottom: 60px;
        }

        .vision,
        .mission {
          margin-bottom: 30px;
        }

        .library .list-item {
          margin-bottom: 10px;
        }

        .student-chapters .list-item {
          margin-bottom: 10px;
        }

        .faculty .description {
          margin-bottom: 10px;
        }

        .about-uem-content h2.sub-title {
          border-bottom: 2px solid #333;
          padding-bottom: 10px;
        }

        .about-uem-content ul.sub-list {
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .about-uem-content ul.sub-list li {
          margin-bottom: 5px;
        }

        .about-uem-content ul.sub-list li:before {
          margin-right: 5px;
        }

        .about-uem-content ul.list {
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .about-uem-content ul.list li {
          margin-bottom: 5px;
        }

        .about-uem-content ul.list li:before {
          margin-right: 5px;
        }

        .about-uem-content .description {
          color: var(--pure-black);
        }

        .about-uem-content .description a:hover {
          text-decoration: underline;
        }

        /* Responsive Styles */

        @media (max-width: 768px) {
          .title {
            font-size: 28px;
          }

          .description {
            font-size: 16px;
            margin-bottom: 15px;
          }

          .sub-title {
            font-size: 24px;
          }

          .list-item {
            font-size: 14px;
            margin-bottom: 5px;
          }
        }

        @media (max-width: 576px) {
          .title {
            font-size: 24px;
            margin-bottom: 15px;
          }

          .description {
            font-size: 14px;
            margin-bottom: 15px;
          }

          // .sub-title {
          // 	font-size: 20px;
          // }

          .list-item {
            font-size: 12px;
            margin-bottom: 5px;
          }

          .section {
            margin-bottom: 30px;
          }

          .about-uem-content {
            padding: 20px;
          }
        }
      `}</style>
      <Heading
        text={"Welcome to UEM Kolkata"}
        class={"mb--2 invalid-selection"}
        element="h1"
      ></Heading>
      <div className="content-container">
        <section className="about-uem">
          <div className="about-uem-content">
            {/* <h1 className="title heading heading--2">Welcome to UEM Kolkata</h1> */}

            <p className=" text-2 text--normal description">
              University of Engineering &amp; Management (UEM) aims to provide
              an international ambience and exposure with innovative teaching
              techniques and courses which are tailor-made (technical &amp; soft
              skills) for the job market giving the students the winning edge
              and competitive advantage during placements.
            </p>
          </div>
        </section>

        <section className="about-uem">
          <div className="about-uem-content">
            <h2 className="heading heading--2 sub-title">Who we are</h2>
            <ul className=" text-2 text--normal list">
              <li className="list-item">
                UEM Kolkata has won "AAA" category (first 10 institutes
                nationally among all institutes of India including all IITs and
                NITs) in NPTEL program (IIT Kharagpur and IIT Chennai)
              </li>
              <li className="list-item">
                UEM Kolkata student has stood 1st amongst all students of India
                in NPTEL program
              </li>
              <li className="list-item">
                UEM Kolkata and UEM Jaipur organized UEMCON-2016 in Columbia
                University, New York, USA in association with IEEE New York,
                IEEE USA and IEEE Region 1
              </li>
              <li className="list-item">
                Highest salary offer at UEM Kolkata is Rs 72 lakhs per annum.
              </li>
              <li className="list-item">
                The University is a partner institution in the prestigious
                European Union sponsored project 'FRACTION' &amp; 'UNNAT BHARAT
                ABHIYAAN' of Govt. of India.
              </li>
              <li className="list-item">
                UEMK has been recognised in the band "Performer" under the
                category "University &amp; Deemed to be University (Private/Self
                Financed) (Technical)" in ATAL RANKING OF INSTITUTIONS ON
                INNOVATION ACHIEVEMENTS (ARIIA) 2021, a flagship program of the
                Ministry of Education, Government of India.
              </li>
            </ul>
          </div>
        </section>

        <section className="about-uem">
          <div className="about-uem-content">
            <h2 className="heading heading--2 sub-title">
              Vision Mission Values
            </h2>
            <div className="vision">
              <h3 className=" heading heading--4 sub-title">Vision</h3>
              <p className=" text-2 text--normal description">
                To be a globally recognized educational institution known for
                outcome based education and application oriented research.
              </p>
            </div>
            <div className="mission">
              <h3 className=" heading heading--4 sub-title">Mission</h3>
              <p className=" text-2 text--normal description">
                To assist students to understand and enjoy seamless nature of
                knowledge and encourage them to apply acquired knowledge to
                practical use, so that they become worthy, socially responsible
                good human beings sought after their leadership qualities. To
                foster creativity, innovation and excellence through example
                based teaching-learning process imparted in the most simple and
                easily comprehensible way. To continuously upgrade knowledge
                base of our man power, improve infrastructure and use of latest
                technology/ pedagogical tools, and update curriculum through
                periodic feedback from stakeholders to enable students to meet
                professional requirements and their expectations.
              </p>
            </div>
            <div className="vision">
              <h3 className=" heading heading--4 sub-title">Values</h3>
              <p className=" text-2 text--normal description">
                Graduate, Postgraduate and Doctoral Students known for their
                hard work, competence, disciplined life, socially responsible,
                professional conduct &amp; intellectual and moral integrity.
              </p>
            </div>
          </div>
        </section>

        <p className=" text-2 text--normal description">
          To learn more about UEM, please visit{" "}
          <Link href={"https://uem.edu.in/"}>our site</Link>{" "}
        </p>
      </div>
    </>
  );
}
