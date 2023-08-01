import React, { useState } from 'react';

const dataList  = [
    {id:1, text:'김태리'},
    {id:2, text:'김고은'},
    {id:3, text:'김다미'},
    {id:4, text:'송혜교'},
    {id:5, text:'전지현'},
]

const Test4 = () => {
    const [ data , setData ] = useState( dataList )

    const onDel = ( id )  => {
        setData( data.filter( item => item.id !== id ))
    }

    const onDel1 = ()  => {
        setData( data.filter( item => item.text !== '김태리'))     
    }
    const onDel2 = ()  => {
        setData( data.filter( item => item.id !== 3 ))
    }

    const onAdd1 = () => {
        setData([
            ...data , 
            { id: data.length + 1 , text:'유재석' }
        ])
    }
    const onAdd2 = () => {
        setData([
            ...data , 
            {
                id: data.length + 1 ,
                text : '강호동'
            }
        ])
    }
    const onAdd = ( text ) => {
        setData([
            ...data ,
            {
                id: data.length + 1 ,
                text 
            }
        ])
    }

    const onMod1 = ()  => {
        setData( data.map( item => {
            if( item.id === 2 ) {
                return {
                    ...item ,
                    text : '김철수'
                }
            }else{
                return item 
            }
        }))
    }

    const onMod2 = ()  => {
        setData( data.map(item => item.id === 4 ? 
                     {...item, text:'김영희'}:item ))
    }

    const onMod = ( id )  => {
        setData( data.map( item => item.id === id ?
                      {...item , text:'이수근'}:item))
    }

    return (
        <div style={{margin:30 }}>
            <h2>추가, 삭제, 수정</h2>
            <p>
                <button onClick={ onAdd1 }>유재석 추가</button>
                <button onClick={ onAdd2 }>강호동 추가</button>
                <button onClick={ () => onAdd('김혜수') }>추가</button>
                <button onClick={ () => onAdd('최우식') }>추가</button>
            </p>
            <p>
                <button onClick={ onDel1 }>김태리 삭제</button>
                <button onClick={ onDel2 }>id - 3 삭제</button>
                <button onClick={ () => onDel(1) }>1 삭제</button>
                <button onClick={ () => onDel(4) }>4 삭제</button>
            </p>
            <p>
                <button onClick={ onMod1 }>수정</button>
                <button onClick={ onMod2 }>수정</button>
                <button onClick={ () => onMod(1) }>수정</button>
            </p>
            
            <hr/>

            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;