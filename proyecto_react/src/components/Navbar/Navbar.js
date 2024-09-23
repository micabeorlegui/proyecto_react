import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";



const Navbar = ({user}) => {
    return (
        <>
            <ul className="main-nav">
                <li><Link to= "/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/populares">Populares</Link></li>
                <li><Link to="/recomendadas">Recomendadas</Link></li>
            </ul>
            <ul className="user">
                <li> Usuario </li>
                <img src="/img/logo.jpg" alt="LogoApp"/>
            </ul>
        </>
    );
  }

export default Navbar;