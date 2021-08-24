import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

export default function GifGrid({ category }) {

    const {data:images, loading } = useFetchGifs( category);


    return (
        <div className="card-grid">

            {loading && <p>Loading   </p>}

            {images.map( img =>  (
                <GifGridItem 
                key = {img.id}
                {...img}
                />     
            )
            )}
           
        </div>
    )
}
