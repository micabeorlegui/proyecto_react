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
            isLoading:true,
            peliculasCargadas: 0, //contador de peliculas que se cargaron
            limit:10 // el limite de peliculas que se deben cargar cada vez que hacen click
        }
    }
    componentDidMount( ) {
        this.setState({
            isLoading: true
        })

        fetch(this.props.url)
            .then( response => response.json() )
            .then( data => this.setState({ backup:data.results,arrayPelicula: data.results.slice(0, this.state.limit),peliculasCargadas: this.state.limit,  isLoading: false}))
            .catch( error => console.log('El error fue: ' + error))
    }

    handleFilterChange(titulo){
        let peliculasFiltradas = this.state.backup.filter((movie)=> movie.title.toLowerCase().includes(titulo.toLowerCase));
        this.setState({
            arrayPelicula: peliculasFiltradas 
        })
    }
    cargarMas(){
        const peliculasCargadasActualizado = this.state.peliculasCargadas + this.state.limit;
        const nuevasPeliculas = this.state.backup.filter((_, index) => index < peliculasCargadasActualizado );
        this.setState({
            arrayPelicula: nuevasPeliculas, //aca actualizo el array de peliculas ya cargadas
            peliculasCargadas: nuevasPeliculas.length //aca actualizo el contador

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
                     {this.state.arrayPelicula.length < this.state.backup.length && ( <button onClick={() => this.cargarMas()}>Cargar más</button>)} 
                </section>
            </>
        )
    }
}
export default VerTodas;