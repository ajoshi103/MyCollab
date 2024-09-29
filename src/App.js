import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
