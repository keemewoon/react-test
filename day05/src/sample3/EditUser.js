import React, { useRef, useState } from 'react';

const EditUser = ({ current , onUpdate }) => {
    const [ user , setUser ] = useState( current )
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
        onUpdate( user )
        setUser({
            text:'',
            addr:''
        })
    }

    return (
        <form onSubmit={ onSubmit }>
            <h2> 작은아씨들 출연진 수정 </h2>
             <p> 
                <label> 이름 </label>  
                <input type="text" name="text" value={text} onChange={ changeInput } ref={textRef} />
             </p>   
             <p> 
                <label> 주소 </label>  
                <input type="text" name="addr" value={addr} onChange={ changeInput }/>
             </p>   
             <p> 
                <button type="submit">수정</button>    
                <button>취소</button>    
             </p>   
        </form>
    );
};

export default EditUser;