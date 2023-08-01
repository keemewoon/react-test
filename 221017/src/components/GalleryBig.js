import React from 'react';
import './GalleryBig.css';

const GalleryBig = ({currItem, onView}) => {
    const {title, image} = currItem

    return (
        <div className='GalleryBig'>
            <h2>{title}</h2>
                <img src={image}/>
        </div>
    );
};

export default GalleryBig;