import React from 'react';

const FriendItem = ({ item , onDel }) => {
    const { id, age, image,name } = item 
    return (
        <li>
            <p>
                <img src={image} alt={name} />
            </p>
            <div>
                <strong>이름 : {name} </strong>
                <span>나이 : {age} </span>                
            </div>
            <button onClick={ () => onDel(id) }>삭제</button>
        </li>
    );
};

export default FriendItem;