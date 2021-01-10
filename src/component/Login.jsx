import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

export class Login extends Form {
  state = {
    data: {username: "", password: ""},
    errors: {},
  };

  //validate schema Joi
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(4).label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div style={{width: "350px ", padding: "30px", margin: "100px auto", boxShadow: "2px 2px 5px black"}}>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "Enter Your Email")}
          {this.renderInput("password", "Password", "Enter Your password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
