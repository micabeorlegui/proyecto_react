import React from "react";
import { Component } from "react";
import './PeliculasGrid.css'
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

class PeliculasGrid extends Component{
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

        fetch(this.props.url)
            .then( response => response.json() )
            .then( data => this.setState({arrayPelicula:data.results, isLoading:false}))
            .catch( error => console.log('El error fue: ' + error))
    }

    render(){
        return(
            <>
                <section className='cardContainer'>
                    {this.state.isLoding ? (
                        this.state.arrayPelicula
                        .filter((pelicula, idx) => idx < 5) 
                        .map((pelicula, idx) => (
                            <Card pelicula={pelicula} key={idx} />
                        ))
                    ):(
                        <Loader/>
                    )}
                    
                </section>
            </>
        )
    }
}
export default PeliculasGrid;