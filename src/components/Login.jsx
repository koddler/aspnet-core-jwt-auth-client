import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';

class Login extends PureComponent {
  submit = values => {
    // TODO: call api
    console.log(values);
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Login</h1>
          </div>
        </div>

        <Link className="btn btn-light" to="/register">
          Registration
        </Link>
        <Link className="btn btn-light" to="/users">
          Users
        </Link>
        <hr />

        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default Login;
