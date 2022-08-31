import React, { useState, useEffect } from "react";
import "./assets/scss/globals.scss";

import Header from "./components/header/Header";
import Main from "./components/main/Main";

// Requisição
// import { getByCoord, getByName } from "./config/http";
import { getWeather } from "./service/weather.service";

// Toast
import { ToastContainer, toast } from "react-toastify";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
        .then((res) => {
          setData({ data: res.data });
          setCoordinates({ lat: res.data.coord.lat, lon: res.data.coord.lon });
        })
        .catch((err) => {
          // eslint-disable-next-line no-cond-assign
          if ((err = 404)) {
            toast.error(
              "Não foi possível encontrar a cidade baseada nas sua coordenadas!"
            );
          } else {
            toast.error("Ocorreu um erro");
          }
        });

      setLocation(true);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [location, setLocation] = useState(false);
  const [data, setData] = useState(false);

  const [coordinates = { lng: 0, lat: 0 }, setCoordinates] = useState();

  return (
    <div className="App">
      <Header methods={[getWeather, setData, setCoordinates]} toast={toast} />
      <Main mapData={coordinates} weatherData={data} locationProps={location} />

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
