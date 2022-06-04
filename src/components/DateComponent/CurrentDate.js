import React from "react";

import { DateContainer } from "./DateStyles";

const CurrentDate = () => {
  let today = new Date();
  let date = today.toLocaleDateString("fr");
  return (
    <DateContainer>
      <p>{date}</p>
    </DateContainer>
  );
};

export default CurrentDate;
