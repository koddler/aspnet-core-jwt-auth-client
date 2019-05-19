import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Users extends PureComponent {
  render() {
    return (
      <div>
        <div>Users Component</div>
        <Link to="/login">Login</Link><br/>
        <Link to="/register">Registration</Link><br/>
        <Link to="/users">Users</Link>
      </div>
    );
  }
}

export default Users;
