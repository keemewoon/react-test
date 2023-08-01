import React, { useRef, useState } from 'react';

const Test7 = () => {
    const [ data , setData] = useState([])
    const [ text , setText ] = useState('')
    const no = useRef(1)
    // const no = useRef(data.length + 1 )
    const textRef = useRef(null)
    
    const changeInput = (e) => {
        const { value } = e.target 
        setText( value )
    }
    //{ id:xx , text:xxx }
    const onAdd  = (e)  => {
        e.preventDefault()

       /*  if( text.length === 0 ) {
            return 
        } */

        if( !text ) return 

        setData([
            ...data ,
            {
                id: no.current++ ,
                text : text 
            }
        ])
        setText('')
        textRef.current.focus()
    }
    return (
        <div>
            <form onSubmit={ onAdd }>
                <input type="text" value={text} onChange={ changeInput}  ref={ textRef } />
                <button type="submit">추가</button>
            </form>

            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / { item.text}
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Test7;