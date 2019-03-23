import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge, Button} from 'reactstrap';


export default class Account extends Component {
  
  render() {
    return (
        <div>
        <Card style={{marginBottom:'40px'}}>
          <CardImg style={{margin:'auto', marginTop:'20px', width:'200px', height:'200px', borderRadius:'50%'}}  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle style={{textAlign:'center'}}><h2>Hi, Bro</h2></CardTitle>
            <CardSubtitle style={{textAlign:'center', marginBottom:'20px'}}>Welcome to The GarageLife</CardSubtitle>
 
            <Badge style={{
                objectPosition:'center',

                justifyContent: 'center',
                alignItems: 'center',
                padding:'20px',margin:'auto'}} 
             color="warning" pill>Create Article</Badge>
         
            </CardBody>
        </Card>
      </div>
    )
  }
}
