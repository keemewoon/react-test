import React from 'react';

const Test5Sub = ({ onAdd , onMod , onDel }) => {
    return (
        <div>
            <p>
                <button onClick={() => onDel(7)}>1 삭제</button>
                <button onClick={() => onAdd('유재석')}>유재석 추가</button>
                <button onClick={() => onMod(3)}>김다미 수정</button>
            </p>
        </div>
    );
};

export default Test5Sub;