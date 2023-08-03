import React from "react";
import { Heading } from "../../../components/pieces";

const CallForPapers = () => {
  return (
    <>
      <style jsx>{`
        .call-for-papers {
          width: 100%;
        }

        .conference-table {
          width: 100%;
          /* max-width: 100%; */
          margin-bottom: 20px;
          border-collapse: collapse;
        }

        .conference-table th,
        .conference-table td {
          padding: 12px;
          text-align: center;
        }

        .conference-table thead th {
          background-color: #f2f2f2;
          font-weight: bold;
          color: #333;
          text-transform: uppercase;
          font-size: 14px;
          border-bottom: 2px solid #ddd;
        }

        .conference-table .track-heading {
          font-size: 18px;
          font-weight: bold;
          color: #555;
        }

        .conference-table .subtrack-heading {
          font-size: 16px;
          font-weight: bold;
          background-color: #eaeaea;
          color: #333;
        }

        .conference-table .subtrack {
          font-size: 14px;
          color: #666;
        }

        .conference-table tbody tr:nth-child(2n) {
          background-color: #f9f9f9;
        }

        .conference-table tbody tr:hover {
          background-color: #f5f5f5;
        }

        /* @media (max-width: 991px) {
      .conference-table .track-heading,
      .conference-table .subtrack-heading,
      .conference-table .subtrack {
        font-size: 16px;
      }
    } */

        @media (max-width: 768px) {
          .conference-table .track-heading,
          .conference-table .subtrack-heading,
          .conference-table .subtrack {
            font-size: 14px;
          }
        }

        @media (max-width: 450px) {
          .conference-table .track-heading,
          .conference-table .subtrack-heading,
          .conference-table .subtrack {
            font-size: 9px;
            padding: 8px;
          }
        }

        /* @media screen and (max-width: 450px) {
        .subtrack{
        font-size: var(--font-size-5);
      }
    } */

        @media (max-width: 375px) {
          .conference-table .track-heading,
          .conference-table .subtrack-heading,
          .conference-table .subtrack {
            font-size: 8px;
            padding: 7px;
          }
        }
      `}</style>
      <Heading
        text={"Call for papers"}
        class={"mb--2 invalid-selection"}
      ></Heading>
      <div className="call-for-papers">
        <table border="1" className="conference-table">
          <thead>
            <tr>
              <th colSpan="2" className="track-heading">
                Track 1. Advanced Computing
              </th>
              <th colSpan="3" className="track-heading">
                Track 2. Advanced Systems
              </th>
            </tr>
            <tr>
              <th colSpan="2" className="subtrack-heading">
                Emerging Computing
              </th>
              <th colSpan="1" className="subtrack-heading">
                AI Systems
              </th>
              <th colSpan="1" className="subtrack-heading">
                IoT Systems
              </th>
              <th colSpan="1" className="subtrack-heading">
                Cyber Security Systems and Blockchain
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="subtrack">Cloud Computing</td>
              <td className="subtrack">Industrial Informatics</td>
              <td className="subtrack">Intelligent Systems</td>
              <td className="subtrack">IoT in Healthcare</td>
              <td className="subtrack">Blockchain Authentication</td>
            </tr>
            <tr>
              <td className="subtrack">Fog Computing</td>
              <td className="subtrack">Human Centric Computing</td>
              <td className="subtrack">AI with Robotics</td>
              <td className="subtrack">IoT in Vehicular Network</td>
              <td className="subtrack">Cryptocurrency</td>
            </tr>
            <tr>
              <td className="subtrack">Dew Computing</td>
              <td className="subtrack">Quantum Cryptography</td>
              <td className="subtrack">AI-based Image Processing</td>
              <td className="subtrack">IoT in Industry</td>
              <td className="subtrack">
                Security, Privacy, Attacks, and Forensics
              </td>
            </tr>
            <tr>
              <td className="subtrack">Parallel Computing</td>
              <td className="subtrack">Digital Forensics</td>
              <td className="subtrack">Explainable AI</td>
              <td className="subtrack">IoT in Agriculture</td>
              <td className="subtrack">Smart Contracts</td>
            </tr>
            <tr>
              <td className="subtrack">Mobile Computing</td>
              <td className="subtrack">Cognitive Intelligence</td>
              <td className="subtrack">Deep Learning</td>
              <td className="subtrack">IoT in Underwater Surveillance</td>
              <td className="subtrack">Encryption Techniques</td>
            </tr>
            <tr>
              <td className="subtrack">Pervasive Computing</td>
              <td className="subtrack">Fuzzy Systems</td>
              <td className="subtrack">Reinforcement Learning</td>
              <td className="subtrack">IoT in Smart City</td>
              <td className="subtrack">Security in IoT</td>
            </tr>
            <tr>
              <td className="subtrack">Green Computing</td>
              <td className="subtrack">Affective Computing</td>
              <td className="subtrack">Active Learning</td>
              <td className="subtrack">Human Activity Recognition</td>
              <td className="subtrack">Crypt Analysis</td>
            </tr>
            <tr>
              <td className="subtrack">Cognitive Computing</td>
              <td className="subtrack">Audio, Speech and Video Processing</td>
              <td className="subtrack">Featured Learning</td>
              <td className="subtrack">Wireless Sensor Networks</td>
              <td className="subtrack">Blockchain-based Machine Learning</td>
            </tr>
            <tr>
              <td className="subtrack">Evolutionary Computation</td>
              <td className="subtrack">Biomedical and Health Informatics</td>
              <td className="subtrack">Meta Learning</td>
              <td className="subtrack">5G & beyond 5G</td>
              <td className="subtrack">Dependable and Secure Computing</td>
            </tr>
            <tr>
              <td className="subtrack">Geoscience and Remote Sensing</td>
              <td className="subtrack">Bioinformatics</td>
              <td className="subtrack">Generative Models</td>
              <td className="subtrack">IoT in Everything</td>
              <td className="subtrack">Cybernetics</td>
            </tr>
            <tr>
              <td className="subtrack">Grid Computing</td>
              <td className="subtrack">Quantum Computing</td>
              <td className="subtrack">Generative Adversarial Network</td>
              <td className="subtrack">AIIoT</td>
              <td className="subtrack"></td>
            </tr>
            <tr>
              <td className="subtrack"></td>
              <td className="subtrack">Bio-inspired Computing</td>
              <td className="subtrack">Soft Computing</td>
              <td className="subtrack">Industry 4.0</td>
              <td className="subtrack"></td>
            </tr>
            <tr>
              <td className="subtrack"></td>
              <td className="subtrack">Neuromorphic Computing</td>
              <td className="subtrack">NLP-based Smart Systems</td>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
            </tr>
            <tr>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
              <td className="subtrack">Robotics Systems</td>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
            </tr>
            <tr>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
              <td className="subtrack">Data Analytics Systems</td>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
            </tr>
            <tr>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
              <td className="subtrack">Big Data</td>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
            </tr>
            <tr>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
              <td className="subtrack">Data Mining</td>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
            </tr>
            <tr>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
              <td className="subtrack">Automation</td>
              <td className="subtrack"></td>
              <td className="subtrack"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CallForPapers;
