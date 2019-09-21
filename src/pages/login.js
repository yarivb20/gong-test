import React, { Component } from "react";
import Comm from "../Utils/comm";
import SecretEncoder from "../Utils/secretEncoder";
import { Form, Button } from "react-bootstrap";

export default class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let secret = SecretEncoder(e.target[0].value, e.target[1].value);
    if (secret === -1) return;
    Comm.getUserID(secret).then(res => {
      if (res.data !== null) this.props.onLoginSuccessful(res.data);
    });
  };
  render() {
    return (
      <div className="Login">
        <h3 className="login-title">Please Login</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
