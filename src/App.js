import React from "react";

import Weather from "./components/WeatherComponent/Weather";
import Time from "./components/TimeComponent/Time";
import CurrentDate from "./components/DateComponent/CurrentDate";
import Quote from "./components/QuoteComponent/Quote";

function App() {
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
