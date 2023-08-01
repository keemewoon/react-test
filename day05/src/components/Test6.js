import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [ step, setStep ] = useState(1)
    const [ count, setCount ] = useState(1)

    const changeInput = (e) => {
        const { value } = e.target 
        setStep( Number(value) )
    }

    useEffect( () => {
        const timer  = setInterval( () => {
            setCount( state => state + step )
        },1000)

        //뒷정리
        return() => {
            console.log('뒷정리')
            clearInterval( timer )
        }
    },[ step ])

    return (
        <div>
            <p>
                <input type="text" value={step} onChange={ changeInput } />
                <span>입력값만큼 1초단위 증가하기</span>
            </p>
            <h2>결과 : { count } </h2>
        </div>
    );
};

export default Test6;