import React, { Component } from 'react';
import FormularioSearch from '../FormularioSearch/FormularioSearch';
import PeliculasGrid from '../PeliculasGrid/PeliculasGrid';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            valor: ''
        }
    }

    render(){
        return (
            <>
                <FormularioSearch ruta="/search" history={this.props.history} funcion="Buscar"/>
                <h2>Bienvenido a Watch Now!</h2>
                <main>
                    <h2>Películas más populares</h2>
                        <PeliculasGrid url={'https://api.themoviedb.org/3/movie/top_rated?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7'}/>
                    <h2>Películas recomendadas</h2>
                    <PeliculasGrid url={'https://api.themoviedb.org/3/discover/movie?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7'}/>
                </main>
            </>
        )
    }
}

export default Home