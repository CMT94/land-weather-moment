import React from "react";

const CurrentDate = () => {
  let today = new Date();
  let date = today.toLocaleDateString("fr");
  return <div>{date}</div>;
};

export default CurrentDate;
