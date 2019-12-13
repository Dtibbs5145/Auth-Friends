import React, { useState, useEffect } from 'react';
import axiosWAuth from '../helpers.js/axiosWAuth';

const AddFriend = () => {
    const [addFriend, setAddFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        axiosWAuth()
            .post('http://localhost:5000/api/friends', addFriend)
            .then(res => {
                console.log(res);
                setAddFriend({
                    name: '',
                    age: '',
                    email: ''
                })
            })
            .catch(error => {
                console.log(error);
            })
    };
    
    const handleChanges = e => {
        setAddFriend({...addFriend, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                placeholder='Name'
                type='text'
                name='name'
                value={addFriend.name}
                onChange={handleChanges}
                />
                <input
                placeholder='Age'
                type='text'
                name='age'
                value={addFriend.age}
                onChange={handleChanges}
                />
                <input
                placeholder='Email'
                type='text'
                name='email'
                value={addFriend.email}
                onChange={handleChanges}
                />
                <button type='submit'>Add Friend!</button>
            </form>
        </div>
    )
}

export default AddFriend;