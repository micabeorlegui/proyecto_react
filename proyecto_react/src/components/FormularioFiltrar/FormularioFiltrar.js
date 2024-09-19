import React from "react";
import { Component } from "react";

class FormularioFiltrar extends Component {
    constructor(props){
        super(props);
        this.state={
            valorInput: ""
        };
    }

    handleEvitarSubmit(event){
        event.preventDefault()
    };

    handleCambiosInput(event){
        this.setState({valorInput: event.target.value},()=> this.props.handleFilterChange(this.state.valorInput))
    }

    render() {
        return(
            <form onSubmit={(event)=>this.handleEvitarSubmit(event)}>
                <input type='text' name='filtro' onChange={(event)=> this.handleCambiosInput(event)} value={this.state.valorInput} placeholder="Filtrar..."/>
            </form>
        );
    }

}

export default FormularioFiltrar;