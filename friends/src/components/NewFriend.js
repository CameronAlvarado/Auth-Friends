import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const NewFriend = (props) => {

    const [newFriend, setNewFriend] = useState({ 
        credentials: { 
            id: '',
            name: '',
            age: '',
            email: ''
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
            // localStorage.setItem('token', res.data.payload);
            return console.log(res);
            })
            .catch(err => console.log(err));
        };

    return (
        <form onSubmit={addFriend}>
        <input
          type="text"
          name="id"
          placeholder="id"
          value={newFriend.credentials.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={newFriend.credentials.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={newFriend.credentials.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={newFriend.credentials.email}
          onChange={handleChange}
        />
        <button>addFriend</button>
      </form>
    )
};

export default NewFriend;