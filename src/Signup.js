import React, { Component } from 'react';


class Signup extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        password: '',
        message: '',
        users: [],
      };
    }
  
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
      
        // Check if password is 8 characters or longer
        if (this.state.password.length < 8) {
          this.setState({ message: 'Password must be 8 characters or longer' });
          return;
        }
      
        // Add the new user to the users list
        this.props.setUsers(prevUsers => [...prevUsers, {name: this.state.name, email: this.state.email, password: this.state.password}]);
      
        // Set the message state
        this.setState({ message: 'Thank you ' + this.state.name + ' for signing up we sent an email to ' + this.state.email + ' to confirm your account.' });
      }
  
    render() {
      return (
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
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
              <button type="submit">Sign Up</button>
            </div>
          </form>
          {this.state.message && <h3>{this.state.message}</h3>}
        </div>
      );
    }
  }
  
  export default Signup;
  