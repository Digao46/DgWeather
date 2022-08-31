import React, { useState, useEffect } from "react";
import "./App.scss";

import Header from "./components/Header";
import Main from "./components/Main";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

function App() {
  const [location, setLocation] = useState(false);
  const [city, setCity] = useState(false);
  const [data, setData] = useState(false);

  const [
    coordinates = {
      lng: 0,
      lat: 0,
    },
    setCoordinates,
  ] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setWeather(position.coords.latitude, position.coords.longitude);
        setLocation(true);
      },
      function (err) {
        console.log(err)
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setQ = (inputData) => {
    setCity({ q: inputData });
  };

  const setWeather = async (lat, lon) => {
    if (!city.q) {
      await axios
        .get("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            lat: lat,
            lon: lon,
            appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
            lang: "pt",
            units: "metric",
          },
        })
        .then((res) => {
          setData({ data: res.data });
          setCoordinates({ lat: res.data.coord.lat, lon: res.data.coord.lon });
        })
        .catch((err) => {
          if ((err = 404)) {
            toast.error("Cidade não encontrada!");
          } else {
            toast.error("Ocorreu um erro");
            console.log(err);
          }
        });
    } else {
      await axios
        .get("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            q: city.q,
            appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
            lang: "pt",
            units: "metric",
          },
        })
        .then((res) => {
          setData({ data: res.data });
          setCoordinates({ lat: res.data.coord.lat, lon: res.data.coord.lon });
        })
        .catch((err) => {
          if ((err = 404)) {
            toast.error("Cidade não encontrada!");
          } else {
            toast.error("Ocorreu um erro");
            console.log(err);
          }
        });
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
