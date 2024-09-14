import React from "react";
import { Component } from "react";
import './PeliculasRecomendadas.css'
import PeliRecomendadaCard from "../PeliRecomendadaCard/PeliRecomendadaCard";

class PeliculasRecomendadas extends Component{
    constructor(){
        super();
        this.state={
            arrayPelicula:[]
        }
    }
    componentDidMount( ) {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7')
            .then( response => response.json() )
            .then( data => this.setState({arrayPelicula:data.results}))
            .catch( error => console.log('El error fue: ' + error))
    }
     /* hacer el fetch aca*/
    render(){
        return(
            <>
                <section className='cardContainer'>
                    {
                        this.state.arrayPelicula.length > 0
                        ? this.state.arrayPelicula
                            .filter((pelicula, idx) => idx < 5) 
                            .map((pelicula, idx) => (
                                <PeliRecomendadaCard pelicula={pelicula} key={idx} />
                            ))
                        : (<p>Cargando...</p>)
                    }
                </section>
            </>
        )
    }
}
export default PeliculasRecomendadas;