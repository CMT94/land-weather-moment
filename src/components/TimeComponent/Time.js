import React from "react";

import { FadeLoader } from "react-spinners";

import { Welcome, TimeStamp, Greeting } from "./TimeStyles";

const Time = () => {
  const [timeState, setTimeState] = React.useState();
  const [isLoading, setIsLoading] = React.useState(undefined);

  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() <= 12) {
      return "Good Morning";
    } else if (today.getHours() >= 13 && today.getHours() <= 17) {
      return "Good Afternoon";
    } else if (today.getHours() >= 18 && today.getHours() <= 20) {
      return "Good Evening";
    } else if (today.getHours() >= 21 && today.getHours() <= 4) {
      return "Good Night";
    } else {
      return "Hi !";
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    setInterval(() => {
      const currentDate = new Date();
      setTimeState(
        currentDate.toLocaleTimeString("fr", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    setIsLoading(false);
  }, []);

  return (
    <Welcome>
      {isLoading && <FadeLoader color="#ffff" />}
      {!isLoading && (
        <>
          <TimeStamp>{timeState}</TimeStamp>
          <Greeting>{greeting()}</Greeting>
        </>
      )}
    </Welcome>
  );
};

export default Time;
