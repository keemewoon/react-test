import React, { useState } from 'react';

const Test1 = () => {
    const [userid , setUserid ] = useState('')
    const [userpw , setUserpw ] = useState('')

    const changeInput1 = (e) => {
        const { value } = e.target 
        setUserid( value )
    }
    const changeInput2 = (e) => {
        const { value } = e.target
        setUserpw( value )
    }

    return (
        <div>
            <input type="text" value={userid} onChange={changeInput1} />
            <input type="text" value={userpw} onChange={changeInput2} />
            <hr/>
            {
                userpw.length > 6 ?
                <button>로그인</button> :
                <button disabled>로그인</button>    
            }
            <br/>
            <br/>
            <button disabled={ userpw.length < 7 }>로그인</button>



        </div>
    );
};

export default Test1;