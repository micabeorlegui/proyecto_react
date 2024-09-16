import React, { Component } from 'react';
import PeliculasPopulares from '../PeliculasPopulares/PeliculasPopulares';
import PeliculasRecomendadas from '../PeliculasRecomendadas/PeliculasRecomendadas';
import FormularioSearch from '../FormularioSearch/FormularioSearch';

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
                <h2>Bienvenido a Watch Now!</h2>
                <FormularioSearch history={this.props.history}/>
                <main>
                    <h2>Películas más populares</h2>
                        <PeliculasPopulares/>
                    <h2>Películas recomendadas</h2>
                        <PeliculasRecomendadas/>
                </main>
            </>
        )
    }
}

export default Home