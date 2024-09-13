import React from 'react';
import PeliculasPopulares from '../PeliculasPopulares/PeliculasPopulares';
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
                <h2>Peliculas en cartel</h2>
            </main>
        </>
    )
}
export default Home