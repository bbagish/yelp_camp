import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import auth from "../services/authService";
import Form from "../components/commons/Form";
import FormCard from "../components/commons/FormCard";

class LoginForm extends Form {
  state = {
    //needs to have some kind of value
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <FormCard label="Sign In">
        <form class="form-signin" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember password
            </label>
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </FormCard>
    );
  }
}

export default LoginForm;
