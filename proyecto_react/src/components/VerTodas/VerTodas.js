import React from "react";
import { Component } from "react";
import './VerTodas.css'
import Card from "../Card/Card";

class VerTodas extends Component{
    constructor(props){
        super(props);
        this.state={
            arrayPelicula:[],
            backup:[],
            isLoading:true
        }
    }
    componentDidMount( ) {
        this.setState({
            isLoading: true
        })

        fetch(this.props.url)
            .then( response => response.json() )
            .then( data => this.setState({arrayPelicula:data.results, backup:data.results, isLoading: false}))
            .catch( error => console.log('El error fue: ' + error))
    }

    handleFilterChange(titulo){
        let peliculasFiltradas = this.state.backup.filter((movie)=> movie.title.toLowerCase().includes(titulo.toLowerCase));
        this.setState({
            arrayPelicula: peliculasFiltradas 
        })
    }

    render(){
        return(
            <>
                <section className='cardContainer'>
                    {this.state.arrayPelicula.length === 0 ? (<p>Cargando...</p>
                    ) : (this.state.arrayPelicula
                        .map((pelicula, idx) => (
                            <Card pelicula={pelicula} key={idx} />
                        )))
                    }
                </section>
            </>
        )
    }
}
export default VerTodas;