import React from "react";

import Moment from "react-moment";
import "moment-timezone";

import { Welcome, TimeStamp, Greeting } from "./TimeStyles";

const Time = () => {
  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() <= 12) {
      return "Good Morning";
    } else if (today.getHours() >= 13 && today.getHours() <= 17) {
      return "Good Afternoon";
    } else if (today.getHours() >= 18 && today.getHours() <= 4) {
      return "Good Evening";
    } else {
      return "Hi !";
    }
  };
  return (
    <Welcome>
      <TimeStamp>
        <Moment format="hh:mm"></Moment>
      </TimeStamp>
      <Greeting>{greeting()}</Greeting>
    </Welcome>
  );
};

export default Time;
