import React, { Component } from "react";
import { Card, Modal,Button } from "react-bootstrap";
import DeleteDialog from "./deleteDialog"

export class UserCard extends Component {
  constructor() {
    super();
    this.state = {showDialog:false}
  }
  getUserName = () => {
    return `${this.props.user.firstName} ${this.props.user.lastName}`;
  };
  getUserEmail = () => {
    return this.props.user.email;
  };
  getUserImage = () => {
    if(this.props.user.photo)
      return <Card.Img variant="top" src={this.props.user.photo} />
    else{
      let initials = `${this.props.user.firstName[0].toUpperCase()}.${this.props.user.lastName[0].toUpperCase()}`;
      return <Card.Title>{initials}</Card.Title>;
    }
      
  };
  deleteCard = () => {
   this.setState({showDialog:true});
  };

  closeDialog = () => {
    this.setState({showDialog:false});
  };

  render() {
    return (
      <div>
      <Card style={{ width: '18rem' }}>
        {this.getUserImage()}
        
        <Card.Body>
          <Card.Title>{this.getUserName()}</Card.Title>
          <Card.Text>
            {this.getUserEmail()}  
          </Card.Text>
        </Card.Body>
         <div className="iconsContainer">
              <Button className="editIcon" />
              <Button type="button" className="deleteIcon" onClick={this.deleteCard}/>
          </div>
        </Card>
        <DeleteDialog show={this.state.showDialog} userID={this.props.userID} closeDialog={this.closeDialog}/>
      </div>

    );
  }
}

export default UserCard;
