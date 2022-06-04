import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const Time = () => {
  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() <= 12) {
      return "Good Morning.";
    } else if (today.getHours() >= 13 && today.getHours() <= 17) {
      return "Good Afternoon.";
    } else if (today.getHours() >= 18 && today.getHours() <= 4) {
      return "Good Evening.";
    } else {
      return "Hi !";
    }
  };
  return (
    <div>
      <p>
        <Moment format="hh:mm"></Moment>
        <p>{greeting()}</p>
      </p>
    </div>
  );
};

export default Time;
