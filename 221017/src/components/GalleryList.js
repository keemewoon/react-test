import React from 'react';
import GalleryItem from './GalleryItem';
import './GalleryList.css'

const GalleryList = ({cats, currItem, onView}) => {
    const {image, title} = currItem

    return (
        <div className='GalleryList'>
            {/* <img src={cats} /> */}
                {
                    cats.map(item => <GalleryItem key={item.id} item={item} onView={onView} cats={cats} currItem={currItem}/>)
                }
        </div>
    );
};

export default GalleryList;