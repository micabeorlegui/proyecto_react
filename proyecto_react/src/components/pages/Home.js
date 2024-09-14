import React from 'react';
import PeliculasPopulares from '../PeliculasPopulares/PeliculasPopulares';
import PeliculasRecomendadas from '../PeliculasRecomendadas/PeliculasRecomendadas';
const Home = ()=> {
    return (
        <>
            <h2>Bienvenido a Watch Now!</h2>
            <form action="/searchResult" method="get">
                <input type="text" name="query" placeholder="Buscar..." required/>
                <button type="submit">Buscar</button>
            </form>

            <main>
                <h2>Peliculas mas populares</h2>
                    <PeliculasPopulares/>
                <h2>Peliculas recomendadas</h2>
                    <PeliculasRecomendadas/>
            </main>
        </>
    )
}
export default Home