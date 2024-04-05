import React, { useEffect } from "react";
import { Heading } from "../../components/pieces";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
const RegistrationPage = () => {
  useEffect(() => {
    document.title = "Registration | " + process.env.app_name;
  }, []);
  return (
    <>
      <Head>
        <title>Registration | Your Conference Name</title>
        <meta
          name="description"
          content="Learn about the registration policy and fees for your conference."
        />

        <meta property="og:title" content="Registration" />
        <meta
          property="og:description"
          content="Learn about the registration policy and fees for your conference."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adcomsys.vercel.app/registration"
        />
        <meta
          property="og:image"
          content="https://adcomsys.vercel.app/_next/image?url=%2Fassets%2FLogo.png&w=1920&q=75"
        />
        <meta property="og:image:alt" content="Registration" />
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
      <style jsx>{`
        .registration-page {
          /* width: 100%; */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .registration-page > * {
          width: 100%;
        }

        @media screen and (max-width: 768px) {
        }

        @media screen and (max-width: 450px) {
          // .table{
          // 	width: 80%;
          // 	overflow: hidden;
          // }
          .table__heading {
            font-size: 1.2rem;
          }
          .table__data {
            font-size: 1.2rem;
          }
        }
      `}</style>
      <Heading
        text={"Registration Policy"}
        class={"mb--2 invalid-selection"}
        element="h1"
      ></Heading>
      <div className="registration-page content-container">
        <p className="text text--normal mb--1">
          According to the AdComSys 2024 conference registration policy, after
          obtaining the formal acceptance by e-mail, at least one author of each
          paper must complete regular registration formalities including payment
          of full registration fees.
        </p>

        <table border={"0"} className="table my--2">
          <thead className="table__head heading">
            <tr className="table__row">
              <th className="table__heading">Category</th>
              <th className="table__heading">
                India/ SAARC countries (Early Bird) (INR)*
              </th>
              <th className="table__heading">
                Foreign Countries (Early Bird) (USD)*
              </th>
              <th className="table__heading">
                India/ SAARC countries (Regular) (INR)*
              </th>
              <th className="table__heading">
                Foreign Countries (Regular) (USD)*
              </th>
            </tr>
          </thead>
          <tbody className="table__body text text--normal">
            <tr className="table__row">
              <td className="table__data">Regular Author (UG/PG)</td>
              <td className="table__data">4500</td>
              {/* <td className="table__data">100+12% Tax and Bank charges</td> */}
              <td className="table__data">100</td>

              <td className="table__data">5500</td>
              {/* <td className="table__data">150+12% Tax and Bank charges</td> */}
              <td className="table__data">150</td>
            </tr>
            <tr className="table__row">
              <td className="table__data">
                Regular Author Academician,PhD Scholars
              </td>
              <td className="table__data">5000</td>
              {/* <td className="table__data">200+12% Tax and Bank charges</td> */}
              <td className="table__data">200</td>
              <td className="table__data">6000</td>
              <td className="table__data">250</td>
              {/* <td className="table__data">250+12% Tax and Bank charges</td> */}
            </tr>
            <tr className="table__row">
              <td className="table__data">Regular Author from Industry</td>
              <td className="table__data">7000</td>
              {/* <td className="table__data">200+12% Tax and Bank charges</td> */}
              <td className="table__data">200</td>
              <td className="table__data">8000</td>
              {/* <td className="table__data">250+12% Tax and Bank charges</td> */}
              <td className="table__data">250</td>
            </tr>
            <tr className="table__row">
              <td className="table__data">Only Attending or Accompanying</td>
              <td className="table__data">2500</td>
              {/* <td className="table__data">80+12% Tax and Bank charges</td> */}
              <td className="table__data">80</td>
              <td className="table__data">2500</td>
              {/* <td className="table__data">80+12% Tax and Bank charges</td> */}
              <td className="table__data">80</td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "right", color: "red", marginBottom: "2rem" }}>
          * All rates are exclusive of GST and other monetary
          transaction charges.
        </p>

        <p className="text text--normal mb--1">
          Final submissions can only be uploaded with regular registration and
          at least one author of each paper must register at the regular rate.
        </p>
        <p className="text text--normal mb--1">
          This fee is only applicable for single author from each paper who will
          be coming to present his/her paper in the respective venue of the
          conference. Necessary details for the registration process will be
          intimidated to the corresponding authors of accepted papers through
          email.
          <br />
          <br />
          <strong>
            If an author has got more than one accepted papers, each paper has
            also to be registered.
          </strong>
        </p>

        <h2
          className="heading heading--3 mb--1"
          style={{
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          Paper Registration Link
          <Image
            src="/assets/gif/new.gif"
            alt="New"
            height={40}
            width={40}
            className="new-icon"
          ></Image>
        </h2>

        <p
          className="text text--normal mb--1"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          To register your Paper please
          <a
            target="_blank"
            href="https://uem.edu.in/uem-kolkata/adcomsys-2024"
          >
            click here
          </a>
        </p>

        <p className="text text--normal mb--1">
          After your paper get registered, the author will get an auto-generated
          e-mail, the auto-generated e-mail consist of an invoice having the
          amount you have paid to register your paper. Author has to e-mail that
          invoice to conference e-mail id (adcomsys@uem.edu.in) along with their
          paper id and paper title. The file format should be typically in pdf
          format. The file name must be in this format:123_ Payment_Receipt.pdf.
          Where 123 is your https://cmt3.research.microsoft.com/ paper number
          (contained in the acknowledgement message to your submission). For
          example: if the submission ID is 87 and corresponding author name is
          Dr. Alex Simpson, then file name should be 87_Payment_Receipt.pdf If
          any author will not send the invoice to the conference email-id then
          their registration will not be granted or treated as invalid.
        </p>

        <h3
          className="heading heading--3 mb--1"
          style={{ textTransform: "uppercase" }}
        >
          Cancellation Policy
        </h3>

        <p className="text text--normal mb--1">
          There will be no cancellation after Registration
        </p>
      </div>
    </>
  );
};

export default RegistrationPage;
