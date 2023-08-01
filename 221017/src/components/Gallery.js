import React, { useState } from 'react';
import './Gallery.css';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';


//고양이 사진배열
const catList = [
    {id: 1, image:'./images/cat0.jpg', title:'고양이 사랑1'},
    {id: 2, image:'./images/cat1.jpg', title:'고양이 사랑2'},
    {id: 3, image:'./images/cat2.jpg', title:'고양이 사랑3'},
    {id: 4, image:'./images/cat3.jpg', title:'고양이 사랑4'},
    {id: 5, image:'./images/cat4.jpg', title:'고양이 사랑5'},
    {id: 6, image:'./images/cat5.jpg', title:'고양이 사랑6'},
    {id: 7, image:'./images/cat6.jpg', title:'고양이 사랑7'},
]


const Gallery = () => {
    const [cats, setCats] = useState(catList) //고양이 데이터배열
    const [currItem, setCurrItem] = useState(cats[0]) //선택한 고양이 사진상태 설정
    
    const onView = (id) => { //해당 id의 고양이 사진을 찾아라
        setCurrItem(cats.find(item => item.id === id)) //find() : 배열함수중 해당값만 찾아줌
    }

    return (
        <div className='Gallery'>
            <GalleryBig cats={cats} currItem={currItem} onView={onView} />
            <GalleryList  cats={cats} currItem={currItem} onView={onView}/>
        </div>
    );
}; 

export default Gallery;