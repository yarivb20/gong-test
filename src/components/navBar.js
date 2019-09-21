import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <Navbar className="bg-light justify-content-between">
          <Navbar.Brand>{this.props.name}</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={this.props.onLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
