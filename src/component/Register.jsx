import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

export class Register extends Form {
  state = {
    data: {username: "", password: "", name: ""},
    errors: {},
  };

  //validate schema Joi
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(4).label("Password"),
    name: Joi.string().required().min(3).label("Name"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div style={{width: "350px ", padding: "30px", margin: "100px auto", boxShadow: "2px 2px 5px black"}}>
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "Enter Your Email")}
          {this.renderInput("password", "Password", "Set Your Password", "password")}
          {this.renderInput("name", "Name", "Enter Your Name")}

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
