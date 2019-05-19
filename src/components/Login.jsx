import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Login extends PureComponent {
  render() {
    return (
      <div>
        <div>Login Component</div>
        <Link to="/register">Registration</Link><br/>
        <Link to="/users">Users</Link>
      </div>
    );
  }
}

export default Login;
