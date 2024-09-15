import React from 'react';
import FormularioVerMas from "../FormularioVerMas/FormularioVerMas";
import PeliculasPopulares from '../PeliculasPopulares/PeliculasPopulares';
import PeliculasRecomendadas from '../PeliculasRecomendadas/PeliculasRecomendadas';

const VerTodas= () => {
    return(
        <>
            <h2>Películas más populares</h2>
                <PeliculasPopulares/>

            <h2>Películas recomendadas</h2>
                <PeliculasRecomendadas/>

           <FormularioVerMas/>
        </>
    )
}

export default VerTodas;