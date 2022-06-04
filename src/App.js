import React from "react";

import CurrentDate from "./components/CurrentDate";
import Quote from "./components/Quote";
import Time from "./components/Time";
import Weather from "./components/Weather";

function App() {
  let currentPosition;

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }, []);
  return (
    <div className="App">
      <Weather />
      <Time />
      <CurrentDate />
      <Quote />
    </div>
  );
}

export default App;
