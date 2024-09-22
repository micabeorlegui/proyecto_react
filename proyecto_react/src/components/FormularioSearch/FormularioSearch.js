import React from "react";
import { Component } from "react";

class FormularioSearch extends Component {
    constructor(props){
        super(props);
        this.state={
            query: ""
        };
    }

    handleEvitarSubmit(event){
        event.preventDefault();
    }

    handleCambios(event){
        this.setState({query: event.target.value})
    }

    handleFormSubmit(){
        this.props.history.push("/search", {query:this.state.query})
    }

    render() {
        return(
            <form onSubmit={(event)=>this.handleEvitarSubmit(event)}>
                <input type='text' name='query' onChange={(event)=> this.handleCambios(event)} value={this.state.query}/>
                <button onClick={()=> this.handleFormSubmit()}>Buscar</button>
            </form>
        );
    }

}

export default FormularioSearch;