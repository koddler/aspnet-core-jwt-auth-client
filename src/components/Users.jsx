import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Users extends PureComponent {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Users</h1>
          </div>
        </div>

        <Link className="btn btn-light" to="/login">
          Login
        </Link>
        <Link className="btn btn-light" to="/register">
          Registration
        </Link>
        <Link className="btn btn-light" to="/users">
          Users
        </Link>
        <hr />
      </div>
    );
  }
}

export default Users;
