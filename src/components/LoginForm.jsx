import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Field
            name="username"
            component="input"
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            component="input"
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
    );
  }
}

LoginForm = reduxForm({ form: 'login_form' })(LoginForm);
export default LoginForm;
