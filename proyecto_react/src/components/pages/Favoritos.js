import React from 'react';
import Card from '../Card/Card';
import { Component } from "react";
import '../pages/css/Home.css';

class Favoritos extends Component{
    constructor(props){
        super(props)
        this.state={
            movies: []
        }
    }
    componentDidMount(){
        const storage= localStorage.getItem('favorites')
        if(storage !== null){
            const parsedStorage= JSON.parse(storage)
            Promise.all(
                parsedStorage.map(id=> 
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7`)
                    .then(response => response.json())
            ))
            .then((data)=>{this.setState({movies: data})
        })
            
        }
    }
    render(){
        return(
              <div>
                <h1 className="title" >Favoritos</h1>
                {this.state.movies.length=== 0 ?(<p>No hay películas en favoritos.</p>) :
                ( <section className="favoritos">
                    {this.state.movies.map(peliculas => (
                          <Card id={peliculas.id} pelicula={peliculas} />
                  ))}
                    </section>)
                  }
            </div>
           
        )
    }
}

export default Favoritos
