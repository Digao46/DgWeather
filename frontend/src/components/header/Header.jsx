import React from "react";
import "./Header.scss"

import Logo from "../../assets/img/logo.png"


const Header = (props) => {

    const handleChange = (e) => {
        props.appSet(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.appGet()
    }

    return (
        <header className="header d-flex flex-column justify-content-around mb-5">

            <div className="logoArea container col-12 d-flex justify-content-center justify-content-md-start">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="logo me-3" src={Logo} alt="Logo" />
                    <a href="/" className="m-0"> DgWeather </a>
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