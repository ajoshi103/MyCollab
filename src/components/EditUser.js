// src/components/EditUser.js
import React, { useState, useEffect } from 'react';
import { updateUser, fetchUsers } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // useNavigate instead of useHistory
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const getUser = async () => {
      const response = await fetchUsers();
      const userData = response.data.find(u => u.id === parseInt(id));
      setUser(userData);
    };
    getUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      navigate('/'); // navigate to home after update
    } catch (err) {
      console.log('Error updating user');
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="text"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
