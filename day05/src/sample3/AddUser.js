import React, { useRef, useState } from 'react';

const AddUser = ({ onAdd }) => {
    const [ user , setUser ] = useState({
        text:'' , addr:''
    })
    const textRef = useRef( null )
    const { text , addr } = user 

    const changeInput = (e) => {
        const { value ,name } = e.target 
        setUser({
            ...user ,
            [name] : value
        }) 
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if( !text || !addr ) return
        onAdd( user )
        setUser({
            text:'',
            addr:''
        })
        textRef.current.focus()
    }

    return (
        <form onSubmit={ onSubmit }>
            <h2> 작은아씨들 출연진 추가 </h2>
             <p> 
                <label> 이름 </label>  
                <input type="text" name="text" value={text} onChange={ changeInput } ref={textRef} />
             </p>   
             <p> 
                <label> 주소 </label>  
                <input type="text" name="addr" value={addr} onChange={ changeInput }/>
             </p>   
             <p> 
                <button type="submit">추가</button>    
             </p>   
        </form>
    );
};

export default AddUser;