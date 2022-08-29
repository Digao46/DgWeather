import React from "react";
import "./Temperature.css"

const Temperature = (props) => {

    let res = props.data.weatherData;

    const windDirection = (deg) => {
        if (deg >= 22 && deg <= 67) {
            // 45deg = Nordeste => NE
            return "NE"
        } else if (deg >= 68 && deg <= 112) {
            // 90deg = Leste => L
            return "L"
        } else if (deg >= 113 && deg <= 157) {
            //135deg = Sudeste => SE
            return "SE"
        } else if (deg >= 158 && deg <= 202) {
            // 180deg = Sul => S
            return "S"
        } else if (deg >= 203 && deg <= 247) {
            // 225deg = Sudoeste => SO
            return "SO"
        } else if (deg >= 248 && deg <= 292) {
            // 270deg = Oeste => O
            return "O"
        } else if (deg >= 293 && deg <= 337) {
            // 315deg = Noroeste => NO
            return "NO"
        } else {
            // 0deg = Norte => N
            // 360deg = Norte => N
            return "N"
        }
    }

    if (!props.data.locationProps) {
        return (
            <section className="loader d-flex flex-column align-items-center justify-content-center mb-5 mt-5">
                <div className="m-5 loading"></div>
                <p className="loadingText text-center col-12">Carregando Informações</p>
                <p className="loadingText text-center col-12">Necessário Acesso á sua Localização!</p>
            </section>
        )
    } else if (!res) {
        return (
            <section className="col-10 col-md-6 col-lg-4 mb-5 mt-5">

            <div className="temp">

                <div className="data card mb-3">
                    <p className="align-self-start m-0"></p>
                    <p className="align-self-end"></p>
                </div>

                <div className="data card d-flex justify-content-center align-items-center mb-3">

                    <div className="currentTemp d-flex justify-content-center align-items-center col-12">
                        <p>°C</p>
                    </div>

                    <hr className="horizontalLineDivision" />

                    <div>
                        <div className="labels col-12 d-flex justify-content-between mt-3">
                            <p className="me-4">
                                min
                            </p>
                            <p className="ms-4">
                                max
                            </p>
                        </div>

                        <div className="otherTemps d-flex justify-content-center col-12">
                            <p className="me-3">°C</p>
                            <div className="divisionLine"></div>
                            <p className="ms-3">°C</p>
                        </div>
                    </div>

                    <hr className="horizontalLineDivision" />

                    <div className="feelsLikeTemp d-flex flex-column justify-content-center align-items-center col-12">
                        <p className="col-12 text-center">Sensação Térmica: </p>

                        <p className=" feelsLike col-12 text-center mb-3">°C</p>
                    </div>

                </div>

                <div className="data card d-flex justify-content-center align-items-center">
                    <div>
                        <div className="labels col-12 d-flex justify-content-around mt-3">
                            <p className="text-center">
                                Direção
                            </p>
                            <p className="text-end">
                                Velocidade
                            </p>
                        </div>

                        <div className="otherTemps d-flex justify-content-center col-12">
                            <p className="col-4 me-4 text-end"><i className="fa-solid fa-location-arrow pe-1" /></p>
                            <div className="divisionLine"></div>
                            <p className="col-4 ms-4">
                                <span className="measurement p-0"> km/h</span> </p>
                        </div>
                    </div>


                </div>
            </div>

        </section>
        )
    }
    else {
        return (
            <section className="col-10 col-md-6 col-lg-4 mb-5 mt-5">

                <div className="temp">

                    <div className="data card mb-3">
                        <p className="align-self-start m-0"> {`${res.data.name}, ${res.data.sys.country}`} </p>
                        <p className="align-self-end">{(res.data.weather[0].description).toUpperCase()}</p>
                    </div>

                    <div className="data card d-flex justify-content-center align-items-center mb-3">

                        <div className="currentTemp d-flex justify-content-center align-items-center col-12">
                            <div className="d-flex justify-content-start justify-content-md-center col-5 col-md-6">
                                <img src={`https://openweathermap.org/img/w/${res.data.weather[0].icon}.png`} alt="Logo" className="icon" />
                            </div>
                            <p className="col-6">{(res.data.main.temp).toFixed(0)}°C</p>
                        </div>

                        <hr className="horizontalLineDivision" />

                        <div>
                            <div className="labels col-12 d-flex justify-content-between mt-3">
                                <p className="text-end me-4">
                                    min
                                </p>
                                <p className="text-start ms-4">
                                    max
                                </p>
                            </div>

                            <div className="otherTemps d-flex justify-content-center col-12">
                                <p className="me-3">{(res.data.main.temp_min).toFixed(0)}°C</p>
                                <div className="divisionLine"></div>
                                <p className="ms-3">{(res.data.main.temp_max).toFixed(0)}°C</p>
                            </div>
                        </div>

                        <hr className="horizontalLineDivision" />

                        <div className="feelsLikeTemp d-flex flex-column justify-content-center align-items-center col-12">
                            <p className="col-12 text-center">Sensação Térmica: </p>

                            <p className=" feelsLike col-12 text-center mb-3">{(res.data.main.feels_like).toFixed(0)}°C</p>
                        </div>

                    </div>

                    <div className="data card d-flex justify-content-center align-items-center">
                        <div>
                            <div className="labels col-12 d-flex justify-content-around mt-3">
                                <p className="text-center">
                                    Direção
                                </p>
                                <p className="text-end">
                                    Velocidade
                                </p>
                            </div>

                            <div className="otherTemps d-flex justify-content-center col-12">
                                <p className="col-5 me-4 text-end"><i className="fa-solid fa-location-arrow pe-1" />{windDirection(res.data.wind.deg)}</p>
                                {/* <div className="divisionLine"></div> */}
                                <p className="col-5 ms-4">{res.data.wind.speed}
                                    <span className="measurement p-0"> km/h</span> </p>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        )
    }
}

export default Temperature;