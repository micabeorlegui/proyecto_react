import React from 'react';
import { Component } from "react";
import PeliculasGrid from "../PeliculasGrid/PeliculasGrid";


class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state={
            arrayPelicula:[],
            isLoding: true
        }
    }

    componentDidMount( ) {
        this.setState({
            isLoading: true
        })
 
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=d4da6f83d8fa5dad990cafe88cb4fbf7`)
            .then( (response) => response.json() )
            .then( (data) => this.setState({arrayPelicula:data.results, isLoading:false}))
            .catch( error => console.log('El error fue: ' + error))
    }

    render(){
        return(
            <>
                {this.state.arrayPelicula.length>0 ? (
                    <>
                        <h2>Resultados de búsqueda: {this.props.location.state.query}</h2>
                        {this.state.isLoding ? (
                            <PeliculasGrid arrayPelicula={this.state.arrayPelicula} url={`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=d4da6f83d8fa5dad990cafe88cb4fbf7`}/>
                        ) : (
                            <p>Cargando...</p>
                        )
                        }
                    </>

                ) : (
                
                    <h2>No hay resultados de búsqueda para {this.props.location.state.query} :/</h2>)}

            </>
        )
    }
}

export default SearchResults;