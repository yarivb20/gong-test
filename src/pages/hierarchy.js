import React, { Component } from "react";
import Comm from "../Utils/comm";
import Navbar from "../components/navBar";
import User from "../components/user";

export default class Hierarchy extends Component {
  constructor() {
    super();
    this.state = { name: "", users: [], firstUsers: [] };
  }
  componentDidMount() {
    Comm.getUserList().then(users => {
      let user = users.filter(user => user.id === this.props.userID);
      let name = this.getUserName(user),
        firstUsers = this.getFirstUsersTree(users);
      this.setState({ name, users, firstUsers });
    });
  }

  getUserName = user => {
    if (user[0]) {
      return `${user[0].firstName} ${user[0].lastName}`;
    }
    return "";
  };

  getFirstUsersTree = users => {
    return users.filter(user => !user.managerId);
  };

  getChildren = userID => {
    return this.state.users.filter(user => user.managerId === userID);
  };

  render() {
    return (
      <div className="Hierarchy">
        <Navbar name={this.state.name} onLogout={this.props.onLogout} />
        {this.state.firstUsers.map(user => (
          <User
            key={user.id}
            loggedUserID={this.props.userID}
            user={user}
            getChildren={this.getChildren}
          />
        ))}
      </div>
    );
  }
}
