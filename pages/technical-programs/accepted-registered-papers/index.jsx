import React, { useEffect } from "react";
import { Heading } from "../../../components/pieces";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import acceptedPapers from "../../../data/acceptedPapers";

function AcceptedAndRegisteredPapers() {
  useEffect(() => {
    document.title =
      "Accepted And Registered Papers | Techinical Programs | " +
      process.env.app_name;
  }, []);
  console.log(acceptedPapers);
  return (
    <>
      <Head>
        <title>
          Accepted And Registered Papers | Technical Programs | Your Conference
          Name
        </title>
        <meta
          name="description"
          content="Learn about the accepted and registered papers for the technical programs of your conference."
        />

        <meta
          property="og:title"
          content="Accepted And Registered Papers | Technical Programs"
        />
        <meta
          property="og:description"
          content="Learn about the accepted and registered papers for the technical programs of your conference."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adcomsys.vercel.app/technical-programs/accepted-registered-pa"
        />
        <meta
          property="og:image"
          content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
        />
        <meta
          property="og:image:alt"
          content="Accepted And Registered Papers"
        />
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
        text={"Accepted And Registered Papers"}
        class={"mb--2"}
        element="h1"
      ></Heading>
      {/* <div className="content-container"> */}
      {/* <h2 className=" heading heading--2 sub-title">
          <center>To be updated</center>
        </h2> */}
      <div className="arp-container">
        {acceptedPapers.map((paper) => (
          <div className="arp-paper-row" key={paper.paperID}>
            <p>{paper.paperID}</p>
            <p>{paper.title}</p>
          </div>
        ))}
      </div>
      <p className="submissions__heading heading heading--3 mb--1">
        ACCEPTED AND REGISTERED PAPERS :-
        <Link
          href={"/assets/downloads/List_of_Accepted_&_Registered_Papers.pdf"}
          target="_blank"
        >
          <Image
            className="download-icon"
            src="/assets/icons/download.png"
            alt="download-icon"
            width={25}
            height={25}
          ></Image>
        </Link>
      </p>
      {/* </div> */}
    </>
  );
}

export default AcceptedAndRegisteredPapers;
