// src/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch all users
export const fetchUsers = async () => {
  return await axios.get(API_URL);
};

// Create a new user
export const createUser = async (userData) => {
  return await axios.post(API_URL, userData);
};

// Update an existing user
export const updateUser = async (id, userData) => {
  return await axios.put(`${API_URL}/${id}`, userData);
};

// Delete a user
export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
