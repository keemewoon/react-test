import React from 'react';
import m0 from '../assets/img/m0.jpg'
import m1 from '../assets/img/m1.jpg'

const Test3 = () => {
    return (
        <div>
            <h2> 이미지 처리하기 </h2>
            <img src={m0} alt="" />
            <img src={m1} alt="" />
            <hr/> 
            <img src="./images/cat0.jpg" alt="" />
            <img src="./images/cat2.jpg" alt="" />
            <img src="./images/cat3.jpg" alt="" />
        </div>
    );
};

export default Test3;

/* 
- src 안에 이미지 넣을경우 
  import 참조변수  from '이미지경로' 

- public 이미지 넣을경우  90%
  index.html - 첫페이지 
  html 처럼 불러올수 있다 
  img src = './images/이미지' 
*/