import React, { Component } from 'react';
import FormularioSearch from '../FormularioSearch/FormularioSearch';
import PeliculasGrid from '../PeliculasGrid/PeliculasGrid';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../pages/css/Home.css';

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
                <h1>¡Bienvenido a Watch Now!</h1>
                <main> 
                    <FormularioSearch className="formularioSearch" history={this.props.history} />
                    <h2>Películas más populares</h2>
                    <PeliculasGrid url={'https://api.themoviedb.org/3/movie/top_rated?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7'}/>
                    <Link to="/populares" className='verTodasLink'>Ver todas</Link>
                    <h2>Películas recomendadas</h2>
                    <PeliculasGrid url={'https://api.themoviedb.org/3/discover/movie?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7'}/>
                    <Link to="/recomendadas"className='verTodasLink'>Ver todas</Link>
                </main>
            </>
        )
    }
}

export default Home