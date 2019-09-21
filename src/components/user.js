import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export class User extends Component {
  getUserName() {
    return `${this.props.user.firstName} ${this.props.user.lastName}`;
  }

  getChildWorkers() {
    return this.props.users.filter(
      user => user.managerId === this.props.user.id
    );
  }

  isActive() {
    return this.props.user.id === this.props.userID;
  }

  action(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="User">
        <ListGroup>
          <ListGroup.Item
            active={this.isActive()}
            onClick={this.action.bind(this)}
          >
            {this.getUserName()}
            {this.getChildWorkers().map(user => (
              <User
                key={user.id}
                userID={this.props.userID}
                user={user}
                users={this.props.users}
              />
            ))}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default User;
