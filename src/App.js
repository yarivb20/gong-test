import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import Hierarchy from "./pages/hierarchy";

export default class App extends Component {
  constructor() {
    super();
    this.state = { userID: null };
  }
  onLoginSuccessful(userID) {
    let userLoggedIn = true;
    this.setState({ userLoggedIn, userID });
  }
  onLogout() {
    let userLoggedIn = false,
      userID = null;
    this.setState({ userLoggedIn, userID });
  }
  render() {
    return (
      <div className="App">
        {this.state.userID !== null ? (
          <Hierarchy
            userID={this.state.userID}
            onLogout={this.onLogout.bind(this)}
          />
        ) : (
          <Login onLoginSuccessful={this.onLoginSuccessful.bind(this)} />
        )}
      </div>
    );
  }
}
