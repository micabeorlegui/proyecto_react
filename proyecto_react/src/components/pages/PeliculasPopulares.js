import React, { Component } from 'react';
import VerTodas from '../VerTodas/VerTodas';


class PeliculasPopulares extends Component{
    constructor(props){
        super(props);
        this.state={
            valor: ''
        }
    }

    render(){
        return (
            <>
                <h2>Todas las películas populares</h2>
                <main>
                    <VerTodas url={'https://api.themoviedb.org/3/movie/top_rated?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7'}/>
                </main>
            </>
        )
    }
}

export default PeliculasPopulares