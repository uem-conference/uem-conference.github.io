import React, { useEffect, useState } from "react";
import { data } from "../../../data/test";
import Image from "next/image";

const FlagCounter = () => {
  const [flagCount, setFlagCount] = useState({});

  const incrementFlagCount = (code) => {
    setFlagCount((prevFlagCount) => ({
      ...prevFlagCount,
      [code]: prevFlagCount[code] ? prevFlagCount[code] + 1 : 1,
    }));
  };
  useEffect(() => {
    // alert(data.length)
    setFlagCount({});
    data.forEach((d) => {
      incrementFlagCount(d.country);
    });
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
      <h1 className="flag-counter__heading heading heading--3 mb--1"><center>World Participation</center></h1>
      {/* <span>^</span><span>v</span> */}
        <div className="flag-counter">
          {/* {JSON.stringify(flagCount)} */}
          {Object.keys(flagCount).map((country) => {
            return (
              <div
                className="flag-counter__card"
                key={`${Math.random()}${country}`}
              >
                <div className="flag-counter__flag">
                  <Image
                    src={`https://flagsapi.com/${country}/flat/64.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={country}
                  ></Image>
                </div>
                <p className="flag-counter__count">{flagCount[country]}</p>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};

export default FlagCounter;
