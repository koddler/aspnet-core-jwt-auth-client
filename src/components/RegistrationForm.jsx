import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegistrationForm extends PureComponent {
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <Field
            name="firstname"
            component="input"
            type="text"
            className="form-control"
            id="firstname"
            placeholder="First Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <Field
            name="lastname"
            component="input"
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Last Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            required
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
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    );
  }
}

RegistrationForm = reduxForm({ form: 'registration_form' })(RegistrationForm);
export default RegistrationForm;
