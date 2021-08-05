// import React, { useState, useEffect } from 'react'
import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category }) => {

    const {data, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="animate__zoomInLeft "> { category }</h3>
            { loading && <p className="animate__slideOutUp"> Loading...</p> }
            <div className="card-grid">
                    {
                        data.map( img => (
                            <GifGridItem 
                                key={ img.id} 
                                {...img}
                            />
                        ))
                    }
            
            </div>
        </>
    )
}
