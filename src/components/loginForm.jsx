import React from "react";
// import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
// import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: {username: "", password: ""},
    errors: {},
  };

  schema = {
    username: Joi.string()
      .regex(/^[,. a-z]+$/)
      .min(3)
      .max(30)
      .required()
      .label("UserName"),
    password: Joi.string().required().min(8).label("Password"),
  };

  doSubmit = async () => {
    try {
      const {data} = this.state;
      // await auth.login(data.username, data.password);
      console.log(data);
      // const { state } = this.props.location;
      // window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.username = ex.response.data;
        this.setState({errors});
      }
    }
  };

  render() {
    // if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className='form'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
