import React, { Component } from 'react';
import VerTodas from '../VerTodas/VerTodas';


class PeliculasRecomendadas extends Component{
    constructor(props){
        super(props);
        this.state={
            valor: ''
        }
    }

    render(){
        return (
            <>
                <h2>Todas las peliculas populares</h2>
                <main>
                    <VerTodas  url={'https://api.themoviedb.org/3/discover/movie?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7'}/>
                </main>
            </>
        )
    }
}
export default PeliculasRecomendadas