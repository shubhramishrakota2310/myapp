import React from "react";

const Card = (props) => {
  return (
    <div className="card-mb-3">
      <div className="card-body">
        <p className="card-title">
          <span>Username: </span>
          {props.info.name}{" "}
        </p>
        <p className="card-text">
          <span> caption:</span>
          {props.info.caption}
        </p>
      </div>
      <div className="card-post">
        <p className="card-post">
          <span>Post:</span>
          {props.info.file}{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;