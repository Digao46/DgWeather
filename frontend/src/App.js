import React, { useState, useEffect } from "react";
import "./assets/scss/globals.scss";

import Header from "./components/header/Header";
import Main from "./components/main/Main";

// Requisição
import { getByCoord, getByName } from "./config/http";

// Toast
import { ToastContainer, toast } from "react-toastify";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [location, setLocation] = useState(false);
  const [city, setCity] = useState(false);
  const [data, setData] = useState(false);

  const [coordinates = { lng: 0, lat: 0 }, setCoordinates] = useState();

  const setQ = (inputData) => {
    setCity({ q: inputData });
  };

  const setWeather = (lat, lon) => {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const appId = process.env.REACT_APP_OPEN_WEATHER_KEY;

    if (!city.q) {
      getByCoord(url, lat, lon, appId, [setData, setCoordinates], toast);
    } else {
      getByName(url, city.q, appId, [setData, setCoordinates], toast);
    }
  };

  return (
    <div className="App">
      <Header appSet={setQ} appGet={setWeather} />
      <Main mapData={coordinates} weatherData={data} locationProps={location} />

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
