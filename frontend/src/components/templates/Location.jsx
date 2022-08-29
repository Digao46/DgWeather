import React from "react";
import "./Location.css"

const Map = (props) => {

    const apiKey = process.env.REACT_APP_HERE_API_KEY
    const url = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?c=${props.data.mapData.lat}%2C${props.data.mapData.lon}&z=5&&apiKey=${apiKey}`

    if (props.data.locationProps) {
        return (
            <section className="col-10 col-md-6 col-lg-5 mb-5 mt-5 d-flex justify-content-center align-items-center">

                <div className="mapArea bg-light d-flex justify-content-center col-12 col-md-10">
                    <div className="sidebar m-3 px-2 py-1"> Latitude: {props.data.mapData.lat} | Longitude: {props.data.mapData.lon} </div>
                    <img loading="lazy" src={url} alt="Mapa da Cidade" />
                </div>
            </section>
        )
    }
}

export default Map; 