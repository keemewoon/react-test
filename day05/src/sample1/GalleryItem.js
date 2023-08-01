import React from 'react';

const GalleryItem = ({ item , onShow }) => {
    const { id , imgurl , title , isClass } = item 
    return (
        <li onClick={ () => onShow(id) } className={ isClass ? "on":""}>
           <img src={imgurl} alt={title} /> 
        </li>
    );
};

export default GalleryItem;