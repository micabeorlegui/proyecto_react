import React from "react";
import "./PeliculaDetail.css";
import { Component } from "react";
import Loader from "../Loader/Loader";
import Favorito from "../Favorito/Favorito";

class PeliculaDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
        };
    }
    componentDidMount() {
        const id = this.props.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d4da6f83d8fa5dad990cafe88cb4fbf7`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    movie: data,
                });
            });
    }
    render() {
        const { movie } = this.state;
        if (!movie) {
            return <Loader/>;
        }
        const { title, overview, poster_path, genres, release_date, vote_average, runtime, id } = movie;
        return (
            <main className="main-detail">
                <article className="movie-detail">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
                    <h2>{title}</h2>
                    <p>Calificación: {vote_average}/10</p>
                    <p>Género/s: {genres.map((genre) => genre.name).join(", ")}</p>
                    <p>Fecha de estreno: {release_date}</p>
                    <p>Duración: {runtime} minutos</p>
                    <p>Sinópsis: {overview}</p>
                    <Favorito id={id} />
                </article>
            </main>
        );
    }
}

export default PeliculaDetail;
