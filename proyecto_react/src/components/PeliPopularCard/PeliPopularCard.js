import React from 'react';
import { Component } from "react";
import "./PeliPopularCard.css"

class PeliPopularCard extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const {title,overview, poster_path}= this.props.pelicula
        return(
            <>
                <article className='character-card'>
                        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                        <h2> {title}</h2> {/* Nombre */}
                        <p> Ir a detalle - hacer link</p>{/* arreglar*/}
                        <p> Agregar o eliminar de favoritos- hacer link</p>{/* arreglar*/}
                        {/* <Link to={`/personajes/id/${id}`}>Ver mas</Link>  arreglar*/}
                        <p>{overview} </p> {/* descripcion - hacerlo link*/}
                        <p className='more' onClick={()=> this.verMas()}>{this.state.verMas ? "ver menos" : 'ver mas'}</p> {/* arreglar*/}
                        {this.state.verMas &&(                          
                            <section className='extra'>                 
                            <p>Origen: {origin.name} </p>               
                            </section>                              
                        )}
                        <p className='delete'>Borrar</p>
                    </article>
            </>
        )
    }
}
export default PeliPopularCard