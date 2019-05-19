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

        <Link className="btn btn-light" to="/register">
          Registration
        </Link>
        <Link className="btn btn-light" to="/users">
          Users
        </Link>
        <hr />

        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
