import React, { useState } from 'react';
// import dataList from '../assets/api/testData'
import { testList } from '../assets/api/testData'


const Test2 = () => {
    // const [ data , setData ] = useState(dataList)
    const [ data , setData ] = useState(testList)
    return (
        <div style={{margin:30}}>
            <h2> 출력 연습 , api </h2>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / { item.text }
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test2;
