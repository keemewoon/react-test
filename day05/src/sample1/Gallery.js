import React, { useState } from 'react';
import './Gallery.css'
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';
import dataList from '../assets/api/catData';

const Gallery = () => {
    const [ data , setData ] = useState( dataList )
    // const [ cat , setCat ]  = useState(dataList[0])
    const [ cat , setCat ]  = useState(data[0])
    
    const onShow = ( id )  => {        
        // setCat( data[id - 1] )
        //mdn find
        setCat( data.find( item => item.id === id ))
        //findIndex
        setData( data.map( item => item.id === id ? 
                                  {...item, isClass:true} : {...item, isClass:false} ))
    }

    return (
        <div className="Gallery">
            <GalleryBig cat={cat} />
            <GalleryList data={data} onShow={onShow} />
        </div>
    );
};

export default Gallery;