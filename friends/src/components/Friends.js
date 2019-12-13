import React, { useState, useEffect } from 'react';
import axiosWAuth from '../helpers.js/axiosWAuth';
import AddFriend from './AddFriend';
import Cards from './Cards';

const Friends = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        axiosWAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('friends', res)
                setFriendsList(res.data)
            })
            .catch(err => console.log(err.res))
    }, []);

    return (
        <div>
            <h2>Friends</h2>
            <AddFriend />
            {/* <Cards /> */}
            {friendsList.map(friend => {
                return (
                <Cards key={friend.id} friend={friend} />
                )
                })}
        </div>
    )
};


export default Friends;