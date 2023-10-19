import React from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div>
      <h2>Welcome to our website</h2>
      <p>Please select an option:</p>
      <div>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default AuthPage;
