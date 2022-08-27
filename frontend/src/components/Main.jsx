import React from "react";
import "./Main.css"

import Temperature from "./templates/Temperature"

const Main = (props) => {


    return (
        <main className="container d-flex justify-content-center">
            <Temperature data={props} />
        </main>
    )
}

export default Main;