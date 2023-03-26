import React from "react";
import Moment from "react-moment";

const Time = () => {
  const now = new Date();

  return (
    <div>
      <div>{now}</div>
    </div>
  );
};

export default Time;
