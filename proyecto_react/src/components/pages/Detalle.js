import React from 'react';
import PeliculaDetail from "../PeliculaDetail/PeliculaDetail"

const Detalle = (props) => {
    const { id } = props.match.params;
    return (
        <>
            <PeliculaDetail id={id} />
        </>
    );
};

export default Detalle;
