// import React, { useState, useEffect } from 'react';
// import axiosWAuth from '../helpers.js/axiosWAuth';
// import Friends from './Friends';

// const FriendsList = () => {
//     const [friendsList, setFriendsList] = useState([]);

//         useEffect(() => {
//             axiosWAuth().get('http://localhost:5000/api/friends')
//                 .then(res => {setFriendsList(res.data)
//                     console.log('friends', res.data)
//                 })
//                 .catch(err => console.log(err.res))
//         }, []);

//     return (
//         <div>
//             {/* {friendsList.map(friend => {
//                 <Friends key={friend.id} friend={friend} />
//             })} */}
//         </div>
//     )
// }

// export default FriendsList;