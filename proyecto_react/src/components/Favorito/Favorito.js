import React from 'react';
import { Component } from "react"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./Favorito.css"

class Favorito extends Component {
    constructor(props){
        super(props)
        this.state= {
            esFavorito: false
        }
    }
    componentDidMount(){
        const storage= localStorage.getItem('favorites')
        if(storage !== null){
            const parsedStorage = JSON.parse(storage)
            const esFavorito= parsedStorage.includes(this.props.id)
            if(esFavorito){
                this.setState({
                    esFavorito: true
                })
            }
        }
    }
    handleFavorite() {
        const storage= localStorage.getItem('favorites')
        if(storage !== null){
            const parsedStorage = JSON.parse(storage)
            if(!parsedStorage.includes(this.props.id)){
                parsedStorage.push(this.props.id)
                const stringFavorite= JSON.stringify(parsedStorage)
                localStorage.setItem('favorites', stringFavorite)
            }
        }
        else{
            const firstFavorite= [this.props.id]
            const stringFavorite= JSON.stringify(firstFavorite)
            localStorage.setItem('favorites', stringFavorite)
        }
        this.setState({
            esFavorito: true
        })
    }
    quitarFavorito(){
        const storage= localStorage.getItem('favorites')
        const parsedStorage= JSON.parse(storage)
        const quitar= parsedStorage.filter(id=> id !== this.props.id)
        const stringFavorite= JSON.stringify(quitar)
        localStorage.setItem('favorites', stringFavorite)
        this.setState({
            esFavorito: false
        })
    }
    render() {
        return (
            <div className="favorite-container">
                <button 
                    className={`favorite-btn ${this.state.esFavorito ? 'active' : ''}`} 
                    onClick={() => !this.state.esFavorito ? this.handleFavorite() : this.quitarFavorito()}
                >
                    {this.state.esFavorito ? (
                        <>
                            <FaHeart size={15} /> 
                            <span>Eliminar de favoritos</span>
                        </>
                    ) : (
                        <>
                            <FaRegHeart size={15} /> 
                            <span>Agregar a favoritos</span>
                        </>
                    )}
                </button>
            </div>
        );
    }    
    }

export default Favorito