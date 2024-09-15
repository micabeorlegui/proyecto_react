import React from "react";
import { Component } from "react";

class FormularioSearch extends Component {
    constructor(props){
        super(props);
        this.state={
            valor: ''
        };
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        this.setState({valor: event.target.value})
    }

    render() {
        return(
            <form onSubmit={(event)=>this.evitarSubmit(event)}>
                <input type='text' onChange={(event)=> this.event.controlarCambios(event)} value={this.state.valor}/>
                <input type='submit' value="Buscar"/>
            </form>
        );
    }

}

export default FormularioSearch;