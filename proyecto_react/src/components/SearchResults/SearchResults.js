import { Component } from "react";

class SearchResults extends Component{
    constructor(){
        super();
        this.state={
            resultados:[]
        }
    }

    componentDidMount( ) {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7')
            .then( response => response.json() )
            .then( data => this.setState({resultados:data.results}))
            .catch( error => console.log('El error fue: ' + error))
    }

    render(){
        return(
            <>
                
            </>
        )
    }
}

export default SearchResults;