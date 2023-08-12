import React, { useEffect, useState } from "react";
import { data } from "../../../data/test";
import Image from "next/image";
// import * as fs from "fs";
// import * as firebase from "firebase/app";
// import * as firebase from "firebase/app"d/;
// import {getDatabase} from 'firebase/database';
// import { getDatabase, ref, onValue, set } from "firebase/database";

// import * as firebase from "firebase/app";
// import 'firebase/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyBHdAtxjqje3RioL8LBXTpg2Zv7O9fH6-g",
//   authDomain: "adcomsys-flag-counter.firebaseapp.com",
//   databaseURL: "https://adcomsys-flag-counter-default-rtdb.firebaseio.com",
//   projectId: "adcomsys-flag-counter",
//   storageBucket: "adcomsys-flag-counter.appspot.com",
//   messagingSenderId: "270967709634",
//   appId: "1:270967709634:web:993cca6a00c45963cb405b",
//   measurementId: "G-1Y13QDHRDK",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const FlagCounter = () => {
  const [flagCount, setFlagCount] = useState([]);
  const [ipAddress, setIpAddress] = useState("Loading...");

//   const [visitCounts, setVisitCounts] = useState({});
  //   const incrementFlagCount = (code) => {
  //     setFlagCount((prevFlagCount) => ({
  //       ...prevFlagCount,
  //       [code]: prevFlagCount[code] ? prevFlagCount[code] + 1 : 1,
  //     }));
  //   };

  async function getPublicIP() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIpAddress(data.ip);
      console.log("IP Address: ", data.ip)
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

      console.log("IP Info: ", { country, city })


      return { country, city };
    } catch (error) {
      console.error("Error fetching IP information:", error);
      return { country: "Error", city: "Error" };
    }
  }


  const getFlagCount = async () => {
    // const response = await fetch('/api/flag-count')
    try {
        const response = await fetch('/api/flag-count', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }});
        const data = await response.json();
        console.log(data.message);
        setFlagCount(data.message)
    } catch (error) {
        console.log("Error in get")
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
          console.log(data);
    } catch (error) {
        console.log("Error in post")
        console.log(error)
    }
  }

//   const handleVisit = (countryCode) => {
//     const db = getDatabase(firebaseApp);

//     // set(ref(db, `visitCounts/${countryCode}`), {
//     //     username: name,
//     //     email: email,
//     //     profile_picture : imageUrl
//     //   });
//     const visitCountsRef = set(
//       ref(db, `visitCounts/${countryCode}`),
//       visitCounts[countryCode] ? visitCounts[countryCode] + 1 : 1
//     );
//     // visitCountsRef.transaction((currentCount) => (currentCount || 0) + 1);
//   };

  useEffect(() => {
    let userIP;
    getPublicIP().then((ip) => {
      // alert(ip)
      userIP = ip;
      getIPInfo(userIP).then((info) => {
        console.log(`Country: ${info.country}`);
        // handleVisit(info.country);
        saveFlagCount(info.country)
        console.log(`City: ${info.city}`);
      });
    });

    getFlagCount()

    // const data = fs.readFileSync("../../../data/flagCount.json")
    // alert(data)

    // const visitCountsRef = getDatabase(firebaseApp).ref('visitCounts');
    // visitCountsRef.on('value', (snapshot) => {
    //   const data = snapshot.val();

    // });

    // console.log("data");
    // const db = getDatabase(firebaseApp);
    // const starCountRef = ref(db, "visitCounts");
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(snapshot);
    //   if (data) {
    //     setVisitCounts(data);
    //     console.log(data);
    //   }
    // });
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
        {/* <span>^</span><span>v</span> */}
        <div className="flag-counter">
          {/* {JSON.stringify(visitCounts)} */}
          {/* <ul>
          {Object.entries(visitCounts).map(([countryCode, count]) => (
            <li key={countryCode}>{countryCode}: {count}</li>
          ))}
        </ul> */}
          {/* {JSON.stringify(flagCount)} */}





          {flagCount && flagCount.map((country) => {
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
