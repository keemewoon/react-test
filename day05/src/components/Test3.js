import React, { useState } from 'react';

const Test3 = () => {
    const [count1  , setCount1 ]  = useState(0)
    const [count2  , setCount2 ]  = useState(0)

    const onUp1  = ()  => {
        setCount1( count1  + 1)
    }
    
    const onUp2  = ()  => {
        setCount2( xxx => xxx + 1 )
        // setCount2( 이전값 => 이전값 + 1 )
        // setCount2( 매개변수 => 매개변수 + 1 )
        // setCount2( count2 => count2 + 1 )
    }


    return (
        <div style={{margin:40}}>
            <h2>{ count1 } </h2>
            <button onClick={ onUp1 }>증가</button>
            <h2>{ count2 } </h2>
            <button onClick={ onUp2 }>증가</button>
        </div>
    );
};

export default Test3;