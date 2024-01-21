import React from "react";
// import styles from "./heading.module.css"
// import { classNameFormatter } from '@/functions/classNameFormatter'

const Heading = (props) => {
  return (
    <>
      <style jsx>{`
        .heading_comp {
          width: 100%;
          /* max-width: 50rem; */
          /* margin: 2rem auto 3rem; */
          border-top: 3px solid;
          border-bottom: 3px solid;
          border-image: linear-gradient(
              to right,
              var(--color-primary-dark),
              var(--color-primary),
              var(--color-primary-light)
            )
            30;
          padding: 1rem 0rem 1rem;
          display: flex;
          justify-content: center;

          margin-bottom: 5rem;
        }

        .heading_comp__text {
          margin: 0rem 1rem;
          width: fit-content;
          color: transparent;
          background-clip: text;
          text-transform: uppercase;
          text-align: center;
        }

        .heading_comp__text__big {
          font-size: var(--font-size-2);
          line-height: calc(var(--font-size-2) * 1.5);
        }

        @media screen and (max-width: 768px) {
          .heading_comp {
            margin-bottom: 4rem;
          }
        }
        @media screen and (max-width: 450px) {
          .heading_comp {
            margin-bottom: 3rem;
          }
        }
      `}</style>
      <div className={`heading_comp`}>
        {/* <div className={`${props.class} heading-comp`}> */}
        <h1
          className={
            "heading_comp__text heading_comp__text__big bg--gradient heading"
          }
        >
          {props.text}
        </h1>
      </div>
    </>
  );
};

export default Heading;
