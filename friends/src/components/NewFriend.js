import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const NewFriend = (props) => {

    const [newFriend, setNewFriend] = useState({ 
        credentials: { 
            username: '', 
            password: '' 
        }});

    const handleChange = e => {
        setNewFriend({
            credentials: {
            ...newFriend.credentials,
            [e.target.name]: e.target.value
            }
        });
        };

    const addFriend = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
            .post('/friends', newFriend.credentials)
            .then(res => {
            localStorage.setItem('token', res.data.payload);
            // redirect to the apps main page?
            props.history.push('/protected');
            })
            .catch(err => console.log(err));
        };

    return (
        <form onSubmit={addFriend}>
        <input
          type="text"
          name="username"
          value={newFriend.credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={newFriend.credentials.password}
          onChange={handleChange}
        />
        <button>addFriend</button>
      </form>
    )
};

export default NewFriend;