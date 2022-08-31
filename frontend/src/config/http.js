import axios from "axios";

export async function getByCoord(url, lat, lon, appId, methods = [], toast) {
  await axios
    .get(url, {
      params: {
        lat: lat,
        lon: lon,
        appid: appId,
        lang: "pt",
        units: "metric",
      },
    })
    .then((res) => {
      methods[0]({ data: res.data });
      methods[1]({ lat: res.data.coord.lat, lon: res.data.coord.lon });
    })
    .catch((err) => {
      if ((err === 404)) {
        toast.error("Cidade não encontrada!");
      } else {
        toast.error("Ocorreu um erro");
        console.log(err);
      }
    });
};

export async function getByName(url, q, appId, methods = [], toast) {
    await axios
        .get(url, {
            params: {
                q: q,
                appid: appId,
                lang: "pt",
                units: "metric",
            },
        })
        .then((res) => {
            methods[0]({ data: res.data });
            methods[1]({ lat: res.data.coord.lat, lon: res.data.coord.lon });
        })
        .catch((err) => {
            if ((err === 404)) {
                toast.error("Cidade não encontrada!");
            } else {
                toast.error("Ocorreu um erro");
                console.log(err);
            }
        });
}
