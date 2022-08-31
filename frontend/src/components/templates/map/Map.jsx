import React from "react";
import "./Map.scss"

import { getMap } from "../../../service/map.service";

const Map = (props) => {

    const url = getMap(props.data.lat, props.data.lon)

    if (props.locationProps) {
        return (
            <section className="col-10 col-md-6 col-lg-5 mb-5 mt-5 d-flex justify-content-center align-items-center">

                <div className="mapArea bg-light d-flex justify-content-center col-12 col-md-10">
                    <div className="sidebar mt-3 px-2 py-1 d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        <p className="m-0 me-1">
                            Latitude: {props.data.lat}
                        </p>
                        <hr className="horizontalLineDivision d-lg-none"/>
                        <span className="m-0 d-none d-lg-block">
                            |
                        </span>
                        <p className="m-0 ms-1">
                            Longitude: {props.data.lon}
                        </p>
                    </div>

                    <img className="col-12" src={url} alt="Mapa da Cidade" />
                </div>
            </section >
        )
    }
}

export default Map; 