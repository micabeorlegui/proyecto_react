import React from "react";
import { Component } from "react";

class FormularioVerMas extends Component {
    constructor(props){
        super(props);
        this.state={
            valor: ''
        };
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={(event)=>this.evitarSubmit(event)}>
                <label>Filtrar:</label>
                <input type='text' value={this.state.valor} onChange={''}/>
                <input type='submit' value=''/>
            </form>
        );
    }

}

export default FormularioVerMas;