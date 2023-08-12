import React, { useEffect, useState } from "react";
import { data } from "../../../data/test";
import Image from "next/image";

const FlagCounter = () => {
  const [flagCount, setFlagCount] = useState([]);
  const [ipAddress, setIpAddress] = useState("Loading...");


  async function getPublicIP() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIpAddress(data.ip);
      return data.ip;
    } catch (error) {
      console.error("Error fetching IP address:", error);
      setIpAddress("Unknown");
    }
  }

  async function getIPInfo(ipAddress) {
    const apiKey = "92ab4c1f9d9847"; // Replace with your actual IPinfo API key
    const apiUrl = `https://ipinfo.io/${ipAddress}/json?token=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Extract country information from the response
      const country = data.country || "Unknown";
      const city = data.city || "Unknown";



      return { country, city };
    } catch (error) {
      console.error("Error fetching IP information:", error);
      return { country: "Error", city: "Error" };
    }
  }


  const getFlagCount = async () => {
    try {
        const response = await fetch('/api/flag-count', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }});
        const data = await response.json();
        setFlagCount(data.message)
    } catch (error) {
        console.log(error)
    }
  }


  const saveFlagCount = async (code) => {
    try {
        const response = await fetch('/api/flag-count', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code:  code})
          });
          const data = await response.json();
    } catch (error) {
        console.log(error)
    }
  }


  useEffect(() => {
    let userIP;
    getPublicIP().then((ip) => {
      // alert(ip)
      userIP = ip;
      if(!ip){return}
      getIPInfo(userIP).then((info) => {
        if(info && info.country){
          saveFlagCount(info.country)
        }
      });
    });

    getFlagCount()

      }, []);

  return (
    <>
      <style jsx>{`
        .flag-counter {
          width: 80%;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }
        .flag-counter__card {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          // border: 1px solid;
          padding: 0.5rem;
          background-color: #ddd;
        }
        .flag-counter__flag {
          width: 80%;
          aspect-ratio: 1;
          position: relative;
        }
        .flag-counter__count {
          padding: 0.5rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          text-align: center;
          // border: 1px solid;
        }
      `}</style>

      {/* {JSON.stringify(data)} */}
      <>
        {/* {JSON.stringify(flagCount)} */}
        <h1 className="flag-counter__heading heading heading--3 mb--1">
          <center>World Participation</center>
        </h1>
        <div className="flag-counter">





          {flagCount && flagCount.map((country) => {
            if(!country.countryCode || country.countryCode==="Error"){return null}
            return (
              <div
                className="flag-counter__card"
                key={`${Math.random()}${JSON.stringify(country)}`}
              >
                <div className="flag-counter__flag">
                  <Image
                    src={`https://flagsapi.com/${country.countryCode}/shiny/64.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={country.countryCode}
                  ></Image>
                </div>
                <p className="flag-counter__count">{country.count}</p>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};

export default FlagCounter;
