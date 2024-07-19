import React from 'react';

import './Header.css'

const Header = () => {
    return (
    
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark header">
            <div className="container-fluid">
                <a className="navbar-brand" href="javascript:void(0)"><img src="../img/Logo.png" alt="Logo" className="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" aria-controls="mynavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">PASEOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">GUARDERIA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">CUSTODIA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">TRASLADOS</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-primary boton" type="button">LOGIN</button>
                        <button className="btn btn-primary boton" type="button">REGISTRARME</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;