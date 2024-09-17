import React from 'react';
import { Component } from "react";
import "./Card.css"
import { Link } from 'react-router-dom';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            verDescripcion: false

        }
    }
    verDescripcion(){
        this.setState({
            verDescripcion: !this.state.verDescripcion
        })
    }
    render(){
        const {title,overview, poster_path}= this.props.pelicula
        return(
            <>
                <article className='character-card'>
                        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                        <h2> {title}</h2> 
                        <p className='more' onClick={()=> this.verDescripcion()}>{this.state.verDescripcion ? "Ver menos" : 'Ver descripción'}</p> 
                        {this.state.verDescripcion &&(                          
                            <section className='extra'>                 
                            <p>Descripción: {overview} </p>               
                            </section>                              
                        )}
                        <Link to="/detalle">Ir a detalle</Link>
                    </article>
            </>
        )
    }
}
export default Card