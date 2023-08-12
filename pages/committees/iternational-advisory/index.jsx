import React from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { Heading } from "../../../components/pieces";
import Image from "next/image";
const internationalAdvisoryCommittee = require("../../../data/international-advisory-committee");
function InternationAdvisoryCommittee() {
  useEffect(() => {
    document.title =
      "International Advisory Committee | Committees | " + process.env.app_name;
  }, []);
  return (
    <>
      <Heading
        text={"International Advisory Committee"}
        class={"mb--2 invalid-selection"}
      ></Heading>
      <div className="technical-program-committee">
        <div className="committee-table">
          {internationalAdvisoryCommittee.map((member, index) => {
            return (
              <Fragment key={member.name + member.affiliation}>
                <p className="committee-table__field  committee-table__name">
                  <span className="committee-table__flag--conatiner">
                    <Image
                      src={`https://flagsapi.com/${member.country}/shiny/64.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={member.country}
                    ></Image>
                  </span>
                  {member.name}
                </p>
                <p
                  className={`committee-table__field committee-table__affiliation ${
                    index % 2 === 0
                      ? "committee-table__affiliation--even"
                      : "committee-table__affiliation--odd"
                  } technical-program-committee__conte`}
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
export default InternationAdvisoryCommittee;
