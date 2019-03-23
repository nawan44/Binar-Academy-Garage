import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';


export default class Account extends Component {
  
  render() {
    return (
        <div>
        <Card style={{marginBottom:'40px'}}>
          <CardImg style={{borderRadius:'50%', paddingLeft:'30%', paddingRight:'30%', paddingTop:'10%', paddingBottom:'10%'}}  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Hi, Bro</CardTitle>
            <CardSubtitle>Welcome to The GarageLife</CardSubtitle>
            <Button style={{ alignContent:'Center', padding:'20px', borderRadius:'50%', backgroundColor:'Oranye', color:'White' }}>Create Article</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}
