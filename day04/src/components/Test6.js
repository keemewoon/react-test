import React, { useRef, useState } from 'react';

const Test6 = () => {
      
    const [ data , setData ] = useState([])
    const no = useRef( data.length + 1 )  
    //{ id:1 , text:'김철수'}
    const names = '김고은,김태리,김다미,송혜교,전지현,유재석,강호동,이수근,최우식,김건우'.split(',')

    const onAdd = ()  => {
        const ran = Math.floor( Math.random() * names.length )
        setData([
            ...data, 
            {
                id: no.current++, 
                text : names[ ran ]
            }
        ])
    }

    return (
        <div>
            <button onClick={ onAdd }>추가</button>
            <hr/>
            <ul>
                { data.map( item => <li key={item.id}>
                    {item.id} / { item.text }
                </li>)}
            </ul>            
        </div>
    );
};

export default Test6;