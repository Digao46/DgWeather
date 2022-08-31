import React from "react";
import "./Main.scss"

import Temperature from "../templates/temperature/Temperature"
import Map from "../templates/map/Map"

const Main = (props) => {
    return (
        <main className="container d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <Temperature data={props} />
            <Map data={props} />
        </main>
    )
}

export default Main;