import React from "react";
import { Component } from "react";
import "./FormularioSearch.css"

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
            <div className="container">
                <form onSubmit={(event)=>this.handleEvitarSubmit(event)}>
                    <input type='text' name='query' onChange={(event)=> this.handleCambios(event)} value={this.state.query} placeholder="Bucar..."/>
                    <button onClick={()=> this.handleFormSubmit()}><i className="fas fa-search"></i></button>
                </form>
            </div>
        );
    }

}

export default FormularioSearch;