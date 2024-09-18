import React from "react";
import { Component } from "react";
import './VerTodas.css'
import Card from "../Card/Card";
import FormularioFiltrar from "../FormularioFiltrar/FormularioFiltrar";

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
            .then( data => this.setState({arrayPelicula:data.results, backup:data.results}))
            .catch( error => console.log('El error fue: ' + error))
    }

    handleFilterChange(){
        // let peliculasFiltradas = this.state.backup.filter((movie)=> movie.title.toLowerCase().includes(titulo.toLowerCase));
        this.setState({
            arrayPelicula: 'peliculasFiltradas' //cambiar, hay algo a corregir
        })
    }

    render(){
        return(
            <>
                <section className='cardContainer'>
                    <FormularioFiltrar handleFilterChange={(titulo)=> this.handleFilterChange(titulo)}/>
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