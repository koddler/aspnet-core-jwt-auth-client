import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import RegistrationForm from './RegistrationForm';

class Registration extends PureComponent {
  submit = values => {
    // TODO: call api
    console.log(values);
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Registration</h1>
          </div>
        </div>

        <Link className="btn btn-light" to="/login">
          Login
        </Link>
        <Link className="btn btn-light" to="/users">
          Users
        </Link>
        <hr />

        <RegistrationForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default Registration;
