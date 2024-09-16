import { Component } from "react";

class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
        }
    }

    componentDidMount( ) {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7')
            .then( (response) => response.json() )
            .then( (data) => this.setState({movies:data.results}))
            .catch( error => console.log('El error fue: ' + error))
    }

    render(){
        return(
            <>
                <p>{this.props.location.state.query}</p>
            </>
        )
    }
}

export default SearchResults;