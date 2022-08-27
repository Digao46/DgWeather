import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

function App() {
  const [location, setLocation] = useState(false);
  const [city, setCity] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setQ = (inputData) => {
    setCity({ q: inputData });
  };

  const setWeather = async (lat, lon) => {
    if (!city.q) {
      await axios
        .get("http://api.openweathermap.org/data/2.5/weather", {
          params: {
            lat: lat,
            lon: lon,
            appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
            lang: "pt",
            units: "metric",
          },
        })
        .then((res) => setData({ data: res.data }))
        .catch((err) => {
          if ((err = 404)) {
            toast.error("Cidade não encontrada!");
          } else {
            toast.error("Ocorreu um erro")
          }
        });;
    } else {
      await axios
        .get("http://api.openweathermap.org/data/2.5/weather", {
          params: {
            q: city.q,
            appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
            lang: "pt",
            units: "metric",
          },
        })
        .then((res) => setData({ data: res.data }))
        .then(console.log(data))
        .catch((err) => {
          if ((err = 404)) {
            toast.error("Cidade não encontrada!");
          } else {
            toast.error("Ocorreu um erro")
          }
        });
    }
  };

  return (
    <div className="App">
      <Header appSet={setQ} appGet={setWeather} />
      <Main weatherData={data} locationProps={location} />

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
