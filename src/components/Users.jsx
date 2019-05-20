import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers } from '../redux/actions/usersAction';

class Users extends PureComponent {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    console.log(users);
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

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.items
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
