import React, { Fragment, useEffect } from "react";
import { Heading } from "../../../components/pieces";
import callForPaperList from "../../../data/callForPaperList";

const CallForPapers = () => {
  useEffect(() => {
    document.title = "Call For Papers | Authors | " + process.env.app_name;
  }, []);
  return (
    <>
      {/* <style jsx>{`
        .call-for-papers {
          // width:100%;
          // max-width: 90rem;
          margin: auto;
        }
        .call-for-papers__track {
          padding: 1.5rem;
          font-size: 2.5rem;
          color: white;
          background-color: var(--color-primary);
          text-align: center;
          margin-bottom: 2rem;
        }
        .call-for-papers__list {
          width: 100%;
          max-width: 45rem;
          margin: auto;
        }

        .call-for-papers__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }


        @media screen and (max-width: 450px) {
          .call-for-papers__grid {
            // display: grid;
            grid-template-columns: 1fr;
            // gap: 1rem;
          }

          .call-for-papers__track {
            // padding: 1.5rem;
            font-size: 2rem;
            // color: white;
            // background-color: var(--color-primary);
            // text-align: center;
            // margin-bottom: 2rem;
          }
        }
      `}</style> */}
      <Heading
        text={"Call for papers"}
        class={"mb--2 invalid-selection"}
      ></Heading>

      <section className="call-for-papers call-for-papers__grid" style={{"--num-col": "2"}}>
        <div className="call-for-papers__grid" style={{"--num-col": "1"}}>
          <h1 className="call-for-papers__track" style={{"--colspan": "1/2"}}>
            {callForPaperList[0].title}
          </h1>
          {callForPaperList[0].subtracks.map((subtrack) => {
            return (
              <Fragment key={Math.random()}>
                <div className="call-for-papers__column" style={{"--num-col": "2"}}>
                  <h2 className="call-for-papers__row call-for-papers__subtrack" style={{"--colspan": "1/3"}}>{subtrack.title}</h2>
                  <div className="call-for-papers__list" style={{"--num-rows": `${subtrack.subtrackData[0].length}`}}>
                    {subtrack.subtrackData[0].map((data) => (
                      <p className="call-for-papers__data" key={data}>
                        {data}
                      </p>
                    ))}
                  </div>
                  <div className="call-for-papers__list" style={{"--num-rows": `${subtrack.subtrackData[1].length}`}}>
                    {subtrack.subtrackData[1].map((data) => (
                      <p className="call-for-papers__data" key={data}>
                        {data}
                      </p>
                    ))}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>

        <div className="call-for-papers__grid" style={{"--num-col": "3"}}>
          <h1 className="call-for-papers__track" style={{"--colspan": "1/4"}}>
            {callForPaperList[1].title}
          </h1>

          {callForPaperList[1].subtracks.map((subtrack) => {
            return (
              <Fragment key={Math.random()}>
                <div className="call-for-papers__column" style={{"--num-col": "1"}}>
                  <h2 className="call-for-papers__subtrack">{subtrack.title}</h2>
                  <div className="call-for-papers__list" style={{"--num-rows": `${subtrack.subtrackData.length}`}}>
                    {subtrack.subtrackData.map((data) => (
                      <p className="call-for-papers__data" key={data}>
                        {data}
                      </p>
                    ))}
                  </div>
                 
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>
    </>

    // ********** OLD LIST
    // <>
    //   {/* <style jsx>{`
    //     .call-for-papers {
    //       // width:100%;
    //       // max-width: 90rem;
    //       margin: auto;
    //     }
    //     .call-for-papers__track {
    //       padding: 1.5rem;
    //       font-size: 2.5rem;
    //       color: white;
    //       background-color: var(--color-primary);
    //       text-align: center;
    //       margin-bottom: 2rem;
    //     }
    //     .call-for-papers__list {
    //       width: 100%;
    //       max-width: 45rem;
    //       margin: auto;
    //     }

    //     .call-for-papers__grid {
    //       display: grid;
    //       grid-template-columns: 1fr 1fr;
    //       gap: 1rem;
    //     }

    //     @media screen and (max-width: 450px) {
    //       .call-for-papers__grid {
    //         // display: grid;
    //         grid-template-columns: 1fr;
    //         // gap: 1rem;
    //       }

    //       .call-for-papers__track {
    //         // padding: 1.5rem;
    //         font-size: 2rem;
    //         // color: white;
    //         // background-color: var(--color-primary);
    //         // text-align: center;
    //         // margin-bottom: 2rem;
    //       }
    //     }
    //   `}</style> */}
    //   <Heading
    //     text={"Call for papers"}
    //     class={"mb--2 invalid-selection"}
    //   ></Heading>

    //   <section className="call-for-papers call-for-papers__grid">
    //     <div>
    //       <h1 className="call-for-papers__track">
    //         {callForPaperList[0].title}
    //       </h1>
    //       {callForPaperList[0].subtracks.map((subtrack) => {
    //         return (
    //           <Fragment key={Math.random()}>
    //             <ul className="list list--1 call-for-papers__list">
    //               <li className="list__item list__item--1">{subtrack.title}</li>
    //               {/* <section className="call-for-papers__grid call-for-papers__grid--2"> */}
    //               <ul className="list list--2">
    //                 {subtrack.subtrackData[0].map((data) => (
    //                   <li className="list__item list__item--2" key={data}>
    //                     {data}
    //                   </li>
    //                 ))}
    //               </ul>
    //               {/* <ul className="list list--2">
    //                 {subtrack.subtrackData[1].map((data) => (
    //                   <li className="list__item list__item--2" key={data}>
    //                     {data}
    //                   </li>
    //                 ))}
    //               </ul> */}
    //             </ul>
    //             {/* <ul>
    //             {subtrack.subtrackData[1].map((data) => (
    //               <li>{data}</li>
    //             ))}
    //           </ul> */}
    //             {/* </section> */}
    //           </Fragment>
    //         );
    //       })}
    //     </div>

    //     <div>
    //       <h1 className="call-for-papers__track">
    //         {callForPaperList[1].title}
    //       </h1>

    //       {callForPaperList[1].subtracks.map((subtrack) => {
    //         return (
    //           <Fragment key={Math.random()}>
    //             <ul className="list list--1 call-for-papers__list">
    //               <li className="list__item list__item--1">{subtrack.title}</li>
    //               {/* <section className="call-for-papers__grid call-for-papers__grid--2"> */}
    //               <ul className="list list--2">
    //                 {subtrack.subtrackData.map((data) => (
    //                   <li className="list__item list__item--2" key={data}>
    //                     {data}
    //                   </li>
    //                 ))}
    //               </ul>
    //               {/* <ul className="list list--2">
    //             {subtrack.subtrackData[1].map((data) => (
    //               <li className="list__item list__item--2" key={data}>{data}</li>
    //             ))}
    //           </ul> */}
    //             </ul>
    //             {/* <ul>
    //             {subtrack.subtrackData[1].map((data) => (
    //               <li>{data}</li>
    //             ))}
    //           </ul> */}
    //             {/* </section> */}
    //           </Fragment>
    //         );
    //       })}
    //     </div>
    //   </section>
    //   {/* <div className="call-for-papers">
    //     <table border="1" className="conference-table">
    //       <thead>
    //         <tr>
    //           <th colSpan="2" className="track-heading">
    //             Track 1. Advanced Computing
    //           </th>
    //           <th colSpan="3" className="track-heading">
    //             Track 2. Advanced Systems
    //           </th>
    //         </tr>
    //         <tr>
    //           <th colSpan="2" className="subtrack-heading">
    //             Emerging Computing
    //           </th>
    //           <th colSpan="1" className="subtrack-heading">
    //             AI Systems
    //           </th>
    //           <th colSpan="1" className="subtrack-heading">
    //             IoT Systems
    //           </th>
    //           <th colSpan="1" className="subtrack-heading">
    //             Cyber Security Systems and Blockchain
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td className="subtrack">Cloud Computing</td>
    //           <td className="subtrack">Industrial Informatics</td>
    //           <td className="subtrack">Intelligent Systems</td>
    //           <td className="subtrack">IoT in Healthcare</td>
    //           <td className="subtrack">Blockchain Authentication</td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Fog Computing</td>
    //           <td className="subtrack">Human Centric Computing</td>
    //           <td className="subtrack">AI with Robotics</td>
    //           <td className="subtrack">IoT in Vehicular Network</td>
    //           <td className="subtrack">Cryptocurrency</td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Dew Computing</td>
    //           <td className="subtrack">Quantum Cryptography</td>
    //           <td className="subtrack">AI-based Image Processing</td>
    //           <td className="subtrack">IoT in Industry</td>
    //           <td className="subtrack">
    //             Security, Privacy, Attacks, and Forensics
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Parallel Computing</td>
    //           <td className="subtrack">Digital Forensics</td>
    //           <td className="subtrack">Explainable AI</td>
    //           <td className="subtrack">IoT in Agriculture</td>
    //           <td className="subtrack">Smart Contracts</td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Mobile Computing</td>
    //           <td className="subtrack">Cognitive Intelligence</td>
    //           <td className="subtrack">Deep Learning</td>
    //           <td className="subtrack">IoT in Underwater Surveillance</td>
    //           <td className="subtrack">Encryption Techniques</td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Pervasive Computing</td>
    //           <td className="subtrack">Fuzzy Systems</td>
    //           <td className="subtrack">Reinforcement Learning</td>
    //           <td className="subtrack">IoT in Smart City</td>
    //           <td className="subtrack">Security in IoT</td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Green Computing</td>
    //           <td className="subtrack">Affective Computing</td>
    //           <td className="subtrack">Active Learning</td>
    //           <td className="subtrack">Human Activity Recognition</td>
    //           <td className="subtrack">Crypt Analysis</td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Cognitive Computing</td>
    //           <td className="subtrack">Audio, Speech and Video Processing</td>
    //           <td className="subtrack">Featured Learning</td>
    //           <td className="subtrack">Wireless Sensor Networks</td>
    //           <td className="subtrack">Blockchain-based Machine Learning</td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Evolutionary Computation</td>
    //           <td className="subtrack">Biomedical and Health Informatics</td>
    //           <td className="subtrack">Meta Learning</td>
    //           <td className="subtrack">5G & beyond 5G</td>
    //           <td className="subtrack">Dependable and Secure Computing</td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Geoscience and Remote Sensing</td>
    //           <td className="subtrack">Bioinformatics</td>
    //           <td className="subtrack">Generative Models</td>
    //           <td className="subtrack">IoT in Everything</td>
    //           <td className="subtrack">Cybernetics</td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack">Grid Computing</td>
    //           <td className="subtrack">Quantum Computing</td>
    //           <td className="subtrack">Generative Adversarial Network</td>
    //           <td className="subtrack">AIIoT</td>
    //           <td className="subtrack"></td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack"></td>
    //           <td className="subtrack">Bio-inspired Computing</td>
    //           <td className="subtrack">Soft Computing</td>
    //           <td className="subtrack">Industry 4.0</td>
    //           <td className="subtrack"></td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack"></td>
    //           <td className="subtrack">Neuromorphic Computing</td>
    //           <td className="subtrack">NLP-based Smart Systems</td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack">Robotics Systems</td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack">Data Analytics Systems</td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack">Big Data</td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack">Data Mining</td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //         </tr>
    //         <tr>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack">Automation</td>
    //           <td className="subtrack"></td>
    //           <td className="subtrack"></td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div> */}
    //   {/* {callForPaperList[1].subtracks.map((subtrack) => {
    //     return (
    //       <Fragment>
    //         <h2>{subtrack.title}</h2>
    //         <section>
    //           <ul>
    //             {subtrack.subtrackData.map((data) => (
    //               <li>{data}</li>
    //             ))}
    //           </ul>
    //           {/* <ul>
    //             {subtrack.subtrackData[1].map((data) => (
    //               <li>{data}</li>
    //             ))}
    //           </ul> *}
    //         </section>
    //       </Fragment>
    //     );
    //   })} */}
    // </>
  );
};

export default CallForPapers;
