import React from 'react';
import GalleryItem from './GalleryItem';
import './GalleryList.css'

const GalleryList = ({ data, onShow }) => {
    return (
        <ul className="GalleryList">
            {
                data.map( item => <GalleryItem key={item.id} item={item} onShow={onShow} /> )
            }
        </ul>
    );
};

export default GalleryList;