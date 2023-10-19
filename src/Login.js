import React, { Component } from 'react';


class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        message: '', // New state variable for storing the message
      };
    }
  
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      
      // Get the user from the users list
      const user = this.props.users.find(user => user.email === this.state.email && user.password === this.state.password);
    
      // Check if user exists
      if (user) {
        console.log('Login successful:', user);
        this.setState({ message: 'Login successful' }); // Set the message state to "Login successful"
      } else {
        console.log('Invalid email or password');
        this.setState({ message: 'Invalid email or password' }); // Set the message state to "Invalid email or password"
      }
    }
    
  
    render() {
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
          {this.state.message && <h3>{this.state.message}</h3>} {/* Display the message */}
        </div>
      );
    }
  }
  
  export default Login;
  