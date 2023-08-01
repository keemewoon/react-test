import React, { useEffect, useRef, useState } from 'react';

const Test1 = () => {
    const [ count  , setCount ] = useState( 0 )
    const Ref1 = useRef()
    const Ref2 = useRef()
    const Ref3 = useRef()
    const onUp = () => {
        setCount( count  + 1 )
        Ref1.current.style.backgroundColor ='hotpink'
        Ref2.current.style.backgroundColor ='tomato'
        Ref3.current.style.backgroundColor ='skyblue'
    }
    //화면에 그려지고 난후 
    useEffect( () => {
        console.log('useEffect')
        Ref1.current.style.backgroundColor ='lime'
        Ref2.current.style.backgroundColor ='red'
        Ref3.current.style.backgroundColor ='blue'
    })

    return (
        <div style={{margin:30}}>
            <h1>카운트 : { count } </h1>
            <h2 ref={Ref1}> useEffect </h2>
            <h2 ref={Ref2}> useLayoutEffect </h2>
            <h2 ref={Ref3}> { count } 컬러+카운트 </h2>
            <button onClick={onUp }>실행</button>
        </div>
    );
};

export default Test1;

/* 
    Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.
 
    side effect: 부수효과 
    함수의 결과값외에 다른일 하는것 

    데이터 가져오기, 구독(subscription) 설정하기, 수동으로 React 컴포넌트의 DOM을 수정하는 것까지 이 모든 것이 side effects입니다. 

    팁
    React의 class 생명주기 메서드에 친숙하다면, useEffect Hook을 
    componentDidMount : 처음에 한번만
    componentDidUpdate : 갱신
    componentWillUnmount : 닫을때 , 로딩이 끝날때 

     useEffect : 위가지을 처리할수 있다 

     형식
     useEffect( 콜백함수 , 의존성 )
     useEffect( () => {} )
     useEffect( () => {}  , [] ) - *
     useEffect( () => {}  , [의존값] ) - * 

     1. 마운트 , 업데이트  : 많이 사용하지 않는다 
     useEffect( () => {
        처음에 한번만 , 
        업데이터 될때마다 
     })

     2. 마운트  : 한번만 실행 
     useEffect( () => {
        실행문
     }, [] )
     
     3. 마운트, 업데이트  : 한번만 실행 , 특정 state, 특정 props **
     useEffect( () => {
        실행문
        특정 state, 특정 props값이 변경될때마다 업데이트 
     }, [ state, props ] )
    
     4. 마운트, 업데이트  : 한번만 실행 , 
        특정 state, 특정 props **

     useEffect( () => {
        실행문
        특정 state, 특정 props값이 변경될때마다 업데이트 

        //clean-up - 뒷정리
        return() => {
            뒷정리 내용
        }
     }, [ state, props ] )

정리(clean-up)를 이용하는 Effects
정리(clean-up)가 필요한 effect도 있습니다. 
외부 데이터에 구독(subscription)을 설정해야 하는 경우를 생각해보겠습니다. 이런 경우에 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요합니다. 

effect가 실행되고 다음 effect가 실행될때 
이전에 effect는 제거를 한다 
( 메모리 누수를 방지 하기 위해 )


      useEffect   : 화면에 그려지고 난후 
      1. props를 받아서 갱신할경우 
      2. 외부 api ( 비동기 통신  - ajax )
      3. 시간  - setTimeout , setInterval 
      4. 외부 라이브러리 

      useLayoutEffect   : 화면에 그려지기 전에  

////////////////////////////////////

      useEffect 가 안될때 (문제가 생길때 )
      useLayoutEffect를 사용하자 ( 반드시는 아니다 )
*/