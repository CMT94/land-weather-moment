import React from "react";
import axios from "axios";

import { WeatherContainer, Temperature, City } from "./WeatherStyles";

import { FadeLoader } from "react-spinners";

const Weather = () => {
  const defaultUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=31db298435df59aa92b1b72c2c7b27cd";

  const [isLoading, setIsLoading] = React.useState(true);
  const [defaultCity, setDefaultCity] = React.useState("Paris");
  const [data, setData] = React.useState(null);

  const getWeatherData = (dataCity) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${dataCity}&units=metric&appid=31db298435df59aa92b1b72c2c7b27cd`
      )
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    fetch(geoApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("data=", data.city);
        getWeatherData(data.city);
      });
  };

  const error = () => {
    console.log(error);
    getWeatherData(defaultCity);
  };

  const getUserPosition = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  React.useEffect(() => {
    getUserPosition();
  }, []);

  if (!data) return null;

  return (
    <WeatherContainer>
      {isLoading && <FadeLoader color="#f1f1f1" />}
      {!isLoading && (
        <>
          <Temperature>{data.main.temp.toFixed(0)}&#176;</Temperature>
          <City>{data.name}</City>
        </>
      )}
    </WeatherContainer>
  );
};

export default Weather;
