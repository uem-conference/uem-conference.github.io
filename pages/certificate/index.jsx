import React, { useState } from "react";
import { useEffect } from "react";
import css from "../../components/certificates/cretificate.styles";
import { Heading } from "../../components/pieces";
// import { certificateStyles } from "../../components/certificates/cretificate.styles";

const Index = () => {
  //   const [type, setType] = useState("authors");
  //   const [value, setValue] = useState("");
  //   useEffect(() => {
  //     // certificateStyles.applyAll();
  //     // css.certificateStyles.applyAll();
  //     // css.styles.applyAll();
  //   }, []);

  //   const handleValueChange = (e) => {
  //     setValue(e.target.value);
  //   };
  //   // const handlePaperIDChange = () => {};

  //   const downloadCertificate = () => {
  //     switch (type) {
  //       case "authors":
  //         alert("authors" + value);
  //         break;
  //       case "reviewers":
  //         alert("reviewers" + value);
  //         break;

  //       default:
  //         break;
  //     }
  //   };
  return <div>Coming Soon</div>;
  //   return (
  //     <>
  //       <Heading
  //         text={"Certifications"}
  //         className={"mb--2 invalid-selection"}
  //         element="h1"
  //       ></Heading>
  //       <section className="certificate">
  //         <div className="certificate__btns">
  //           <button
  //             type="button"
  //             className="btn btn--primary certificate__btn"
  //             onClick={() => {
  //               setType("reviewers");
  //             }}
  //           >
  //             Reviewers
  //           </button>
  //           <button
  //             type="button"
  //             className="btn btn--primary certificate__btn"
  //             onClick={() => {
  //               setType("authors");
  //             }}
  //           >
  //             Authors
  //           </button>
  //         </div>

  //         <div className="certificate__form">
  //           {type === "authors" && (
  //             <input
  //               type="text"
  //               name="paperId"
  //               id="paperId"
  //               onChange={handleValueChange}
  //               value={value}
  //               placeholder="Paper ID"
  //               className="certificate__textbox"
  //             />
  //           )}
  //           {type === "reviewers" && (
  //             <input
  //               type="text"
  //               name="email"
  //               id="email"
  //               onChange={handleValueChange}
  //               value={value}
  //               placeholder="email"
  //               className="certificate__textbox"
  //             />
  //           )}
  //           <button className="btn" onClick={downloadCertificate}>
  //             Download
  //           </button>
  //         </div>
  //       </section>
  //     </>
  //   );
};

export default Index;
