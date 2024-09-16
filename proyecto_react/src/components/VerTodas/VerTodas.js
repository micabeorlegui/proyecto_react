import React from "react";
import { Component } from "react";
import './VerTodas.css'
import Card from "../Card/Card";

class VerTodas extends Component{
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
                    {
                        this.state.arrayPelicula.length > 0
                        ? this.state.arrayPelicula
                            .map((pelicula, idx) => (
                                <Card pelicula={pelicula} key={idx} />
                            ))
                        : (<p>Cargando...</p>)
                    }
                </section>
            </>
        )
    }
}
export default VerTodas;