import React, { useEffect, useState } from 'react';

const Test5Sub = () => {
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const onMove = (e) => {
        console.log('onMove')
        setX( e.clientX )
        setY( e.clientY )
    }

    useEffect( () => {
        console.log('useEffect')
        window.addEventListener('mousemove' , onMove)

        //뒷정리
        return() => {
            console.log('뒷정리')
            window.removeEventListener('mousemove', onMove)
        }
    },[])


    return (
        <h2 style={{margin:20}}>
            x축 : {x } / y축 :{y}
        </h2>
    );
};

export default Test5Sub;