import React from "react";
import { useWeather } from "../context/Weather";

export const Card = () => {
  const weather = useWeather();

  const icon = weather?.data?.weather[0]?.icon;
  const url = `http://openweathermap.org/img/w/${icon}.png`

  return (
    <div className="card">
      {/* {JSON.stringify(weather.data)} */}
      <img className="mx-auto" src={url} alt="" width="80px" />
      <h2 className="mx-auto">{weather?.data?.name} {weather?.data?.sys.country}</h2>
      <h2 className="mx-auto">Weather: {weather?.data?.weather[0]?.description}</h2>
      <h2 className="mx-auto">Temprature: {weather?.data?.main.temp}°C</h2>
      <h2 className="mx-auto">Humidity: {weather?.data?.main.humidity}% </h2>
      <h2 className="mx-auto">Wind speed: {weather?.data?.wind.speed}Km/h</h2>
    </div>
  );
};
