import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";



const Navbar = ({user}) => {
    return (
        <>
            <ul className="main-nav">
                <li><Link to= "/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/populares">Peliculas Populares</Link></li>
                <li><Link to="/recomendadas">Peliculas Recomendadas</Link></li>
            </ul>
            <ul className="user">
                <li>NombreUsuario</li>
                <img src="/img/logo.jpg" alt="LogoApp"/>
            </ul>
        </>
    );
  }

export default Navbar;