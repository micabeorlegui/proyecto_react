import React from 'react';
import { Component } from "react";
import "./Card.css"
import { Link } from 'react-router-dom';
import Favorito from '../Favorito/Favorito';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            verDescripcion: false,
            movies: [] 

        }
    }
    verDescripcion(){
        this.setState({
            verDescripcion: !this.state.verDescripcion
        })
    }
    render(){
        const {title,overview, poster_path, id}= this.props.pelicula
        return(
            <>
                <article className='character-card'>
                        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                        <h3> {title}</h3> 
                        <p className='more' onClick={()=> this.verDescripcion()}>{this.state.verDescripcion ? "Ver menos" : 'Ver descripción'}</p> 
                        {this.state.verDescripcion &&(                          
                            <section className='extra'>                 
                            <p>Descripción: {overview} </p>               
                            </section>                              
                        )}
                        <div className="button-container">
                            <Link className="detalle-link" to={`./detalle/id/${id}`}>Ir a detalle</Link>
                            <Favorito id= {id}/>
                        </div>
                        
                    </article>
            </>
        )
    }
}
export default Card