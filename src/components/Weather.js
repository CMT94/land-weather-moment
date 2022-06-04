import React from "react";
import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=31db298435df59aa92b1b72c2c7b27cd";

const Weather = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <div>
      <p>{data.main.temp.toFixed(0)}</p>
    </div>
  );
};

export default Weather;
