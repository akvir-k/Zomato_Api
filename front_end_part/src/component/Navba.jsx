import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <div className="container_change">
                        <a className="navbar-brand text-danger mr-auto circle" href="https://www.zomato.com">
                                <img id="Nav-image" src="/unnamed.jpg" />
                        </a>
                    </div>
                    <div className="container-2nd">

                        <div className="collapse navbar-collapse text-capitalize text " id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto text-d">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/Search" > GeoCode</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/ByName">Search By City Name</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;