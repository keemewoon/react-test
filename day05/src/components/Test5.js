import React, { useState } from 'react';
import Test5Sub from './Test5Sub';

const Test5 = () => {
    const [ isShow , setIsShow ] = useState(false)
    const onToggle = ()  => {
         setIsShow( !isShow )   
    }
    
    return (
        <div>
            <p>
                <button onClick={onToggle}>{isShow ? '숨기기':'보기기'} </button>
            </p> 
            <hr/>
            {
                isShow && <Test5Sub />
            }
            
        </div>
    );
};

export default Test5;