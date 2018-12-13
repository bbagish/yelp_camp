import React from "react";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import auth from "../services/authService";
import Form from "./commons/Form";
import FormCard from "./commons/FormCard";

class RegisterForm extends Form {
  state = {
    //needs to have some kind of value
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  // render() {
  //   return (
  //     <div>
  //       <h1>Register</h1>
  //       <form onSubmit={this.handleSubmit}>
  //         {this.renderInput("username", "Username")}
  //         {this.renderInput("password", "Password", "password")}
  //         {this.renderInput("name", "Name")}
  //         {this.renderButton("Register")}
  //       </form>
  //     </div>
  //   );
  // }
  render() {
    return (
      <FormCard label="Sign Up">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <div className="form-group">{this.renderButton("Sign Up")}</div>
        </form>
      </FormCard>
    );
  }
}

export default RegisterForm;
