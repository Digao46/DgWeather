import React from "react";
import "./Main.scss"

import Temperature from "../templates/temperature/Temperature"
import Map from "../templates/map/Map"

const Main = (props) => {
    return (
        <main className="container d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <Temperature locationProps={props.locationProps} data={props.weatherData.data} />
            <Map locationProps={props.locationProps} data={props.mapData} />
        </main>
    )
}

export default Main;