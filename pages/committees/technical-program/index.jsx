import React from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { Heading } from "../../../components/pieces";
import Image from "next/image";
const technicalProgramCommittee = require("../../../data/technical-program-committee");
function TechnicalProgramCommittee() {
  useEffect(() => {
    document.title =
      "Technical Program Committee | Committees | " + process.env.app_name;
  }, []);
  return (
    <>
      <Heading
        text={"Technical Program Committee"}
        class={"mb--2 invalid-selection"}
      ></Heading>
      <div className="technical-program-committee ">
        <div className="committee-table">
          {technicalProgramCommittee.map((member, index) => {
            return (
              // 				<div
              // 					key={Math.random()}
              // 					className="technical-program-committee__card"
              // 				>
              // 					<p className="technical-program-committee__card_number">
              // 						{index + 1}
              // 					</p>
              // 					<p className="technical-program-committee__text technical-program-committee__name text text--small">
              // 						{member.name}
              // 					</p>
              // 					<p
              // 						className="technical-program-committee__text
              // technical-program-committee__affiliation text text--small"
              // 					>
              // 						{member.affiliation}
              // 					</p>
              // 				</div>
              <Fragment key={member.name + member.affiliation}>
                <p className="committee-table__field committee-table__name">
                  <span className="committee-table__flag--conatiner">
					{/* <Image src={`https://flagsapi.com/${"IN"}/shiny/64.png`} layout="fill" objectFit="contain" alt={member.country}></Image> */}
					<Image src={`https://flagsapi.com/${member.country}/shiny/64.png`} layout="fill" objectFit="contain" alt={member.country}></Image>
				  </span>
                  {member.name} 
                </p>
                <p
                  className={`committee-table__affiliation committee-table__field ${
                    index % 2 === 0
                      ? "committee-table__affiliation--even"
                      : "committee-table__affiliation--odd"
                  } technical-program-committee__ontent`}
                >
                  {member.affiliation}
                </p>
              </Fragment>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .technical-program-committee {
          padding: 0rem 1rem;
        }
      `}</style>
    </>
  );
}
export default TechnicalProgramCommittee;
