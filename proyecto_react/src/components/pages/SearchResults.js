import React from 'react';
import { Component } from "react";
import PeliculasGrid from "../PeliculasGrid/PeliculasGrid";
import Loader from '../Loader/Loader';
import '../pages/css/SearchResults.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


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
                <div className="search-results">
                    {this.state.isLoading ? (
                        <Loader/>
                    ) : this.state.arrayPelicula.length > 0 ? (
                        <>
                            <h2>Resultados de búsqueda: {this.props.location.state.query}</h2>
                            <PeliculasGrid arrayPelicula={this.state.arrayPelicula} url={`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=d4da6f83d8fa5dad990cafe88cb4fbf7`}/>
                        </>
                    ) : (
                        <>
                            <h2 className='noHay'>No hay resultados de búsqueda para "{this.props.location.state.query}"</h2>
                            <iframe src="https://giphy.com/embed/10tIjpzIu8fe0" width="480" height="288" frameBorder="0" className="giphy-embed" allowFullScreen title="Giphy"></iframe>
                            <h3 className='intentalo'>Intentalo nuevamente...</h3>
                            <Link to="/" className="volverHome">Volver al Home</Link>
                        </>
                    )}
                </div>
                
            </>
        )
    }
}

export default SearchResults;