import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Login extends PureComponent {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Login</h1>
          </div>
        </div>

        <form>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
            />
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <Link to="/register">Registration</Link>
        <br />
        <Link to="/users">Users</Link>
      </div>
    );
  }
}

export default Login;
