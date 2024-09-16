import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";



const Navbar = ({user}) => {
    return (
        <>
            <ul className="main-nav">
                <li><Link to= "/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/peliculasPopulares">Peliculas Populares</Link></li>
                <li><Link to="/peliculasRecomendadas">Peliculas Recomendadas</Link></li>
            </ul>
            <form action="/searchResult" method="get">
                <input type="text" name="query" placeholder="Buscar..." />
                <button type="submit">Buscar</button>
            </form>
            <ul className="user">
                <li>NombreUsuario</li>
                <img src="/img/logo.jpg" alt="LogoApp"/>
            </ul>
        </>
    );
  }

export default Navbar;