import React from "react";
import "./Main.css"

import Temperature from "./templates/Temperature"
import Map from "./templates/Location"

const Main = (props) => {
    return (
        <main className="container d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <Temperature data={props} />
            <Map data={props} />
        </main>
    )
}

export default Main;