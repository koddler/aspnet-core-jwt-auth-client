import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Registration extends PureComponent {
  render() {
    return (
      <div>
        <div>Registration Component</div>
        <Link to="/login">Login</Link><br/>
        <Link to="/users">Users</Link>
      </div>
    );
  }
}

export default Registration;
