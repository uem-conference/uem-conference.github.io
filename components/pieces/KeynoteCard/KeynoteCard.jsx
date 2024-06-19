import Image from "next/legacy/image";
import React, { Fragment, useState } from "react";

const KeynoteCard = (props) => {
  const data = props.data;

  // const [showDesc, setShowDesc] = useState(false);
  return (
    <Fragment>
      <div className="keynote-card">
        <div className="keynote-card__image">
          <Image src={data.image} layout="fill" alt={data.name} />
        </div>
        <div className="keynote-card__content">
          <div className="keynote-card__content__name">
            {data.name.toLowerCase()}
          </div>
          <div className="keynote-card__content__dept">
            {data.dept}-{data.org}
          </div>
          <div className="keynote-card__content__desc">{data.desc}</div>
        </div>
      </div>

      {/* {showDesc && (
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
      )} */}
    </Fragment>
  );
};

export default KeynoteCard;
