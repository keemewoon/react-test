import React, { useState } from 'react';
import Test5Sub from './Test5Sub';

const dataList  = [
    {id:1, text:'김태리'},
    {id:2, text:'김고은'},
    {id:3, text:'김다미'},
    {id:4, text:'송혜교'},
    {id:5, text:'전지현'},
]

const Test5 = () => {
    const [ data , setData ] = useState( dataList )

    const onDel = (id) => {
        // alert(id)
        setData( data.filter( item => item.id !== id ))
    }
    const onAdd = (text) => {
        // alert(text)
        setData([
            ...data ,
            {
                id: data.length + 1  ,
                text:'유재석'
            }
        ])
    }
    const onMod = (id) => {
        // alert(id)
        setData( data.map( item => item.id === id ? 
            {...item , text:'강호동'}:item))
    }

    return (
        <div>
            <h2>추가, 삭제, 수정 </h2>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / { item.text}
                    </li>)
                }
            </ul>
            <hr />
            <Test5Sub onAdd={onAdd} onMod={onMod} onDel={onDel} />
        </div>
    );
};

export default Test5;