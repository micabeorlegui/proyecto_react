import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";



const Navbar = ({user}) => {
    return (
        <>
            <ul className="main-nav">
                <li><Link to= "/">Home</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
                <li><Link to="/ver todas">Secciones ver todas</Link></li>
            </ul>
            <ul className="user">
                <li>PONER IMAGEN ACA</li>
            </ul>
        </>
    );
  }

export default Navbar;