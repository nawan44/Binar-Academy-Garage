import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge, Button} from 'reactstrap';


export default class Account extends Component {
  
  render() {
    return (
        <div>
        <Card class="p-2 flex-shrink-1 bd-highlight" className="text-center" 
        style={{ marginTop:'40px', width:'346px', height:'381px', borderRadius:'5px', boxShadow:'0 4px 4px 0 rgba(0, 0, 0, 0.1)  ', border:'solid 1px #d6d6d6' ,backgroundColor:'#ffffff'}}>
          <CardImg style={{backgroundColor:'d6d6d6', margin:'auto', marginTop:'20px', marginBottom:'30px', width:'150px', height:'150px', borderRadius:'50%'}}  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle style={{textAlign:'center'}}><h2 style={{color:'#2e2e2e', fontSize:'30px', height:'36px'}}>Hi, Bro</h2></CardTitle>
            <CardSubtitle style={{textAlign:'center', marginBottom:'20px', height:'22px', fontSize:'18px', color:'#8c8c8c'}}>Welcome to The GarageLife</CardSubtitle>
 
            <Badge

            className="float-center"
             style={{
                width:'171.4px',
                height:'40px',
                backgroundColor:'#e07e0c',
              
                }} 
              pill> 
              <h2 style={{ 
               
              width:'126px', 
              textAlign:'center',
              margin:'auto',
              fontSize:'20px',
              fontWeight:'500px',
              color:'#ffffff', 
              fontFamily:'Roboto'
             }}>Create Article</h2>
             </Badge>
         
            </CardBody>
        </Card>
      </div>
    )
  }
}
