import React from "react";
import { Component } from "react";
import './VerTodas.css'
import Card from "../Card/Card";
import FormularioFiltrar from "../FormularioFiltrar/FormularioFiltrar";

class VerTodas extends Component{
    constructor(props){
        super(props);
        this.state={
            arrayPelicula:[],
            backup:[],
            isLoading: true,
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
            .then( data => {
                const backup = data.results;
                const arrayPelicula = backup.filter((_, index) => index < this.state.limit);
                this.setState({backup, arrayPelicula,peliculasCargadas: this.state.limit,  isLoading: false})
            })
            .catch( error => console.log('El error fue: ' + error))
    }

    cargarMas(){
        const peliculasCargadasActualizado = this.state.peliculasCargadas + this.state.limit;
        const nuevasPeliculas = this.state.backup.filter((_, index) => index < peliculasCargadasActualizado );
        this.setState({
            arrayPelicula: nuevasPeliculas, //aca actualizo el array de peliculas ya cargadas
            peliculasCargadas: nuevasPeliculas.length //aca actualizo el contador

        })
    }

    handleFilterChange(titulo){

        {titulo === "" ? (
            this.setState({arrayPelicula: this.state.backup})
        ):(
            this.setState({
                arrayPelicula: this.state.backup.filter((movie)=> movie.title.toLowerCase().includes(titulo.toLowerCase()))
            }) 
        )}
        
    }

    render(){
        return(
            <>
                <FormularioFiltrar handleFilterChange={(title)=> this.handleFilterChange(title)}/>
                <section className='cardContainer'>
                    {this.state.arrayPelicula
                        .map((pelicula, idx) => (
                            <Card pelicula={pelicula} key={idx} />
                        ))}
                </section>
                {this.state.arrayPelicula.length < this.state.backup.length && ( <button onClick={() => this.cargarMas()}>Cargar más</button>)} 
                    
            </>
        )
    }
}
export default VerTodas;