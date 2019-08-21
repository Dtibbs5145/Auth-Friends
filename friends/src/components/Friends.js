import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWAuth from '../helpers.js/axiosWAuth';

class Friends extends React.Component {
    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axios.get('http:localhost:5000/api/data')
    };

    // const Friends = (props) => {
    //     const [friendsList, setFriendsList] = useState([]);

    //     useEffect(() => {
    //         axiosWAuth().get('http://localhost:3000/api/friends')
    //             .then(res => setFriendsList(res.data)
    //         })
    //             .catch(err => console.log(err.res));
    //     }, []);
    render() {
        return (
            <div>
                <h2>Friends</h2>
                {/* {friendsList.map(friend > {
                    return (<div key = {friend.id)
                } > { friend.name } /> */}
            });
        </div>
        );
    };
};

export default Friends;





//     formatData = {} => {
//         const formattedData = [];
//         this.props.friends.forEach((name,))
//     }
// }


//1:39:11