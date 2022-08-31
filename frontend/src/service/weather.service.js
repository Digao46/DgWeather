import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/";

const httpClient = axios.create({
  baseURL: url,
  params: {
    appId: process.env.REACT_APP_OPEN_WEATHER_KEY,
    lang: "pt",
    units: "metric",
  },
});

export async function getWeather(params) {
  return await httpClient.get("/weather", {
    params: {
      ...params,
    },
  });
}
