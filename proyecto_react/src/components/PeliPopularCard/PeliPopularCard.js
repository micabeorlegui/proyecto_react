import { Component } from "react";
import "./PeliPopularCard.css"

class PeliPopularCard extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <>
                <article className='character-card'>
                        <img src={image} alt="" />{/* arreglar*/}
                        <h2> Nombre</h2> {/* Nombre */}{/* arreglar*/}
                        <p>Descripcion entre llaves </p> {/* descripcion - hacerlo link*/}
                        <p> Ir a detalle - hacer link</p>{/* arreglar*/}
                        <p> Agregar o eliminar de favoritos- hacer link</p>{/* arreglar*/}
                        <Link to={`/personajes/id/${id}`}>Ver mas</Link> {/* arreglar*/}
                        <p className='more' onClick={()=> this.verMas()}>{this.state.verMas ? "ver menos" : 'ver mas'}</p> {/* arreglar*/}
                        {this.state.verMas &&(                          
                            <section className='extra'>                 
                            <p>Origen: {origin.name} </p>               
                            </section>                              
                        )}
                        {/* arreglar*/}
                        <p className='delete'>Borrar</p>
                    </article>
            </>
        )
    }
}
export default PeliPopularCard