import React from 'react';


const GalleryItem = ({item, onView, currItem}) => {
    const {image, title, id} = item
    return (
        // 선택한 해당 값에만 className='on' 붙이기
        <li className={currItem.id === id ? 'on' : ''} onClick={() => onView(id)}>
               <img src={image} alt={title}/>
        </li>
    );
};

export default GalleryItem;