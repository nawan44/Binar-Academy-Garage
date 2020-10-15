import React, { Component } from 'react'
import { Card, CardImg, ListGroup, ListGroupItem, Media} from 'reactstrap';
import AddImage from '../Image/addimage.png';
import AddDescription from '../Image/adddescription.png';
import AddYourProduct from '../Image/addyourproduct.png';

export default class AddMedia extends Component {
  
  render() {
    return (
      <div style={{width: '250px', height: '224px'}}>
       <Card>
       <ListGroup>
        <ListGroupItem className="AddMediaList">Add Media</ListGroupItem>
        <ListGroupItem className="AddMediaListGroup">
        <Media>
        <Media left href="#" >
          <CardImg className="AddMediaCardImg" src={AddImage}  />
        </Media>
        <Media body>
          <Media className="AddMedia2" >Add Image </Media>
          </Media>
          </ Media>
          </ListGroupItem>
          <ListGroupItem className="AddMediaListGroup" >
          <Media>
        <Media left href="#" >
          <CardImg className="AddMediaCardImg" src={AddDescription}  />
        </Media>
        <Media body>
          <Media className="AddMedia2">Add Description</Media>
          </Media>
          </ Media>
          </ListGroupItem>
          <ListGroupItem  className="AddMediaListGroup">
          <Media>
        <Media left href="#" >
          <CardImg className="AddMediaCardImg" src={AddYourProduct}  />
        </Media>
        <Media body>
          <Media className="AddMedia2"> Add Your Product</Media>
          </Media>
          </ Media>
        </ListGroupItem>
      </ListGroup>
      </Card>
    </div>
    )
  }
}
