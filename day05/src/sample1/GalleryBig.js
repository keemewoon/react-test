import React from 'react';
import './GalleryBig.css'

const GalleryBig = ({ cat }) => {
    const { id , imgurl , title } = cat 
    return (
        <div className="GalleryBig">
            <img src={imgurl} alt={title} />
            <h2>{title}</h2>
        </div>
    );
};

export default GalleryBig;