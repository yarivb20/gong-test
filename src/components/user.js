import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export class User extends Component {
  getUserName = () => {
    return `${this.props.user.firstName} ${this.props.user.lastName}`;
  };
  isActive = () => {
    return this.props.user.id === this.props.loggedUserID;
  };

  action = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <div className="User">
        <ListGroup>
          <ListGroup.Item active={this.isActive()} onClick={this.action}>
            {this.getUserName()}
            {this.props.getChildren(this.props.user.id).map(user => (
              <User
                key={user.id}
                loggedUserID={this.props.loggedUserID}
                user={user}
                getChildren={this.props.getChildren}
              />
            ))}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default User;
