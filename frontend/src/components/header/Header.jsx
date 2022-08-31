import React, { useState } from "react";
import "./Header.scss"

import Logo from "../../assets/img/logo.png"

import { toast } from "react-toastify";


const Header = (props) => {

    const [city, setCity] = useState(false);

    const handleChange = (e) => {
        setCity({ q: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.methods[0]({ q: city.q })
            .then((res) => {
                props.methods[1]({ data: res.data });
                props.methods[2]({ lat: res.data.coord.lat, lon: res.data.coord.lon });
            })
            .catch((err) => {
                // eslint-disable-next-line no-cond-assign
                if ((err = 404)) {
                    toast.error(
                        "Não foi possível encontrar a cidade!"
                    );
                } else {
                    toast.error("Ocorreu um erro");
                }
            });
    }

    return (
        <header className="header d-flex flex-column justify-content-around mb-5">

            <div className="logoArea container col-12 d-flex justify-content-center justify-content-md-start">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="logo me-3" src={Logo} alt="Logo" />
                    <p className="m-0"> DgWeather </p>
                </div>
            </div>


            <div className="container col-12 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-6 ">

                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i className="fa-solid fa-location-dot" />
                            </span>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="q"
                                className="inputCity form-control"
                                placeholder="Insira a cidade"
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header;