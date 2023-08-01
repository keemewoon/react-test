import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'

const dataList = [
    {id:1, text:'운동하기', isChk:false },
    {id:2, text:'친구만나기', isChk:true },
    {id:3, text:'퇴근하기' , isChk:false },
]

const Todos = () => {
    const [ data , setData ] = useState( dataList )
    const no = useRef( data.length + 1 )

    //삭제
    const onDel = ( id )  => {
       setData( data.filter( item => item.id !== id)) 
    }

    //추가
    const onAdd = ( text ) => {
        setData([
            ...data, 
            {
                id:no.current++,
                text,
                isChk:false 
            }
        ])
    }

    //수정
    const onMod = ( id ) => {
        setData( data.map( item => item.id === id ? 
            {...item , isChk: true } : item ))
    }

    return (
        <div className="Todos">
            <h1> 할일 기록하기 </h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onMod={onMod} />
        </div>
    );
};

export default Todos;