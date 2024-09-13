import React from "react";
import { Component } from "react";
import PeliPopularCard from "../PeliPopularCard/PeliPopularCard";
import './PeliculasPopulares.css'

class PeliculasPopulares extends Component{
    constructor(){
        super();
        this.state={
            arrayPelicula:[]
        }
    }
    componentDidMount( ) {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7')
            .then( response => response.json() )
            .then( data => this.setState({arrayPelicula:data.results}))/* chequear el results de aca con la info que me trae la api*/
            .catch( error => console.log('El error fue: ' + error))
    }
     /* hacer el fetch aca*/
    render(){
        return(
            <>
                <section className='cardContainer'>
                    {
                        this.state.arrayPelicula.length > 0 ? (this.state.arrayPelicula.map((pelicula,idx)=> (<PeliPopularCard pelicula={pelicula} key={idx}/>))) : (<p>Cargando...</p>)   
                    
                    }
                </section>
            </>
        )
    }
}
export default PeliculasPopulares;