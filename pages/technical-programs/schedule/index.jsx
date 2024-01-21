import React, { useEffect } from "react";
import { Heading } from "../../../components/pieces";
import Head from "next/head";
function Schedule() {
  useEffect(() => {
    document.title = "Schedule | Techinical Programs | " + process.env.app_name;
  }, []);
  return (
    <>
      <Head>
        <title>Schedule | Technical Programs | Your Conference Name</title>
        <meta
          name="description"
          content="View the schedule for the technical programs of your conference."
        />

        <meta property="og:title" content="Schedule | Technical Programs" />
        <meta
          property="og:description"
          content="View the schedule for the technical programs of your conference."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adcomsys.vercel.app/technical-programs/schedule"
        />
        <meta
          property="og:image"
          content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
        />
        <meta property="og:image:alt" content="Schedule" />
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
      <Heading text={"Schedule"} class={"mb--2"} element="h1"></Heading>
      <div className="content-container">
        <h2 className=" heading heading--2 sub-title">
          <center>To be updated</center>
        </h2>
      </div>
    </>
  );
}

export default Schedule;
