import React, { useState } from 'react';
// import Friends from './Friends';

const Cards = (props) => {
    const [friend] = useState(props.friend)
    return (
    <div>
        <p>{friend.name}</p>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
    </div>
    )};

export default Cards;