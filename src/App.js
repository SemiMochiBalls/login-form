import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';
import Signup from './Signup';
import Login from './Login';

function App() {
  const [users, setUsers] = useState([]); // Create a state variable for users

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} /> {/* Pass users and setUsers to Signup */}
          <Route path="/login" element={<Login users={users} />} /> {/* Pass users to Login */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
