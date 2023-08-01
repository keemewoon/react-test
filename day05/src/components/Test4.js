import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [ count , setCount ] = useState(1)
    
    useEffect( () => {
        const timer = setInterval( () => {
            console.log('setInterval')
            // setCount( count + 1 )
            setCount( state => state + 1   )
         /*    setCount( state => {
                return state + 1
            }   ) */
            
            //뒷정리
            return()  => {
                clearInterval( timer )
            }
        }, 1000)

    },[])

    return (
        <div>
           <h1> 타이머 : {count} </h1> 
        </div>
    );
};

export default Test4;