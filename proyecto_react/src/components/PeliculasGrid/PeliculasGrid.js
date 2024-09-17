import React from "react";
import { Component } from "react";
import './PeliculasGrid.css'
import Card from "../Card/Card";

class PeliculasGrid extends Component{
    constructor(props){
        super(props);
        this.state={
            arrayPelicula:[]
        }
    }
    componentDidMount( ) {
        fetch(this.props.url)
            .then( response => response.json() )
            .then( data => this.setState({arrayPelicula:data.results}))
            .catch( error => console.log('El error fue: ' + error))
    }

    render(){
        return(
            <>
                <section className='cardContainer'>
                    {this.state.arrayPelicula
                            .filter((pelicula, idx) => idx < 5) 
                            .map((pelicula, idx) => (
                                <Card pelicula={pelicula} key={idx} />
                            ))
                    }
                </section>
            </>
        )
    }
}
export default PeliculasGrid;