import React, { useEffect, useRef, useState } from 'react';

const Test2 = () => {
    const [ text , setText ] = useState('')
    const textRef = useRef(null)

    const changeInput = (e) => {
        const { value } = e.target 
        setText( value )
    }

    //화면에 그려지고 난후 
    useEffect( () => {
        console.log('useEffect')
        textRef.current.focus()
    },[])

    return (
        <div>
            <input type="text" value={text} onChange={ changeInput } ref={textRef} />

        </div>
    );
};

export default Test2;