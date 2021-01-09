import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {username: "", email: "", password: "", mobile: ""},
    errors: {},
  };
  schema = {
    username: Joi.string()
      .regex(/^[a-z]+$/)
      .min(3)
      .max(20)
      .required()
      .label("UserName"),
    email: Joi.string()
      .required()
      .email({minDomainSegments: 2, tlds: {allow: ["com", "net"]}})
      .label("Email"),
    password: Joi.string().required().min(8).label("Password"),
    mobile: Joi.string()
      .required()
      .regex(/[\d{9}]$/)
      .max(10)
      .label("Mobile"),
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
    return (
      <div className='form'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("mobile", "Mobile")}

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}
export default RegisterForm;
