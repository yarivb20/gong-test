import React, { Component } from "react";
import { Card, Modal,Button } from "react-bootstrap";
import Comm from "../Utils/comm";

export class UserCard extends Component {
  handleClose = () => {
    this.props.closeDialog();
  }

  handleClose = () => {
    this.props.closeDialog();
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default UserCard;
