import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import FormularioSearch from "../FormularioSearch/FormularioSearch";



const Navbar = ({user}) => {
    return (
        <>
            <ul className="main-nav">
                <li><Link to= "/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/peliculasPopulares">Peliculas Populares</Link></li>
                <li><Link to="/peliculasRecomendadas">Peliculas Recomendadas</Link></li>
            </ul>
            <FormularioSearch history={this.props.history}/>
            <ul className="user">
                <li>NombreUsuario</li>
                <img src="/img/logo.jpg" alt="LogoApp"/>
            </ul>
        </>
    );
  }

export default Navbar;