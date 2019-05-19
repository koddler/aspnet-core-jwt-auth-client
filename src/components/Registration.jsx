import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import RegistrationForm from './RegistrationForm';
import { register } from '../redux/actions/accountsAction';

class Registration extends PureComponent {
  submit = values => {
    console.log(values);
    this.props.register(values);
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

export default connect(
  null,
  { register }
)(Registration);
