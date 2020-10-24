import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import GifGridItem from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const { loading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            { loading ? 'cargando' : 'data cargada' }
          {/*   <hr />
            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                </div> */}
        </>
    )
}

export default GifGrid;