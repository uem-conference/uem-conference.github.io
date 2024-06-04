import Image from "next/image";
import React, { Fragment, useState } from "react";

const KeynoteCard = (props) => {
  const data = props.data;

  const [showDesc, setShowDesc] = useState(false);
  return (
    <Fragment>
      <div className="keynote-card">
        <div className="keynote-card__image">
          <Image src={data.image} layout="fill"></Image>
        </div>
        <div className="keynote-card__content">
          <p className="keynote-card__content__name">
            {data.name.toLowerCase()}
          </p>
          <p className="keynote-card__content__dept">{data.dept}</p>
          <p className="keynote-card__content__org">{data.org}</p>
          <p className="keynote-card__content__desc">{data.desc}</p>
          <button
            className="keynote-card__btn"
            onClick={() => {
              setShowDesc(true);
            }}
          >
            Know More
          </button>
        </div>
      </div>

      {showDesc && (
        <div className="keynote__screen">
          <button
            className="keynote__btn"
            onClick={() => {
              setShowDesc(false);
            }}
          >
            X
          </button>
          <div className="keynote__content">
            <p className="keynote__name">{data.name}</p>
            <p className="keynote__job">
              {data.dept}, {data.org}
            </p>
            <p className="keynote__desc">{data.desc}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default KeynoteCard;
