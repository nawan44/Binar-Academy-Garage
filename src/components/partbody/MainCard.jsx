import React, { Component } from 'react'

import { Card, CardImg, CardBody, 
    CardTitle, CardSubtitle, Form, FormGroup, Badge, Input, Media} from 'reactstrap';
import CardComment from './CardComment';
export default class MainCard extends Component {
  
  render() {
    return (
        <Card 
        class="p-2 w-100 bd-highlight"
        style={{  marginTop:'40px', width:'725px', height:'auto', borederRadius:'7px', boxShadow:'0 4px 4px 0 rgba(0,0,0,0.1)' }}> 
 <CardBody>
        <CardSubtitle>   
        <Media>
      <Media><CardImg style={{width:'60px', height:'60px', marginRight:'40px', borderRadius:'50%'}} src="
      https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
      " className="Icon"
      />
        <Media  />
      </Media>
      <Media body>
        <Media heading className="MediaHeading" style={{height:'33px', fontSize:'28px', marginBottom:'6px' }} >
         Nama
        </Media>
        <small className="text-muted">Last updated 3 mins ago</small>
         </Media>

         <Badge style={{padding:'10px', width:'120px', height:'35px', 
         backgroundColor:"#2e4ffc", fontSize:'16px', color:'ffffff' }}  pill>+ Follow</Badge>
    </Media>
        </CardSubtitle>
        </CardBody>
       
          <CardTitle> <CardImg style={{height:'375px', width:'725px'}} 
          src="
          https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
                   "/> 
          </CardTitle>       
         

 
        <CardBody>
            <CardTitle style={{height:'24px', marginBottom:'15px', marginTop:'15px', color:'#626262', fontSize:'20px'}}> Custom</CardTitle>
        <CardSubtitle style={{height:'66px', fontSize:'28px', color:'#2e2e2e' }}>
        <h2>CHOPPERLAND RE 350 VS CHOPPERLAND SR 400</h2></CardSubtitle>
        
        </CardBody>
        <hr width="100%"></hr>
        <CardBody>
        <CardSubtitle>
            <Form>
            <FormGroup>
          <Input valid style={{backgroundColor:'#ededed', color:'#626262', 
          height:'50px', width:'665px', borderRadius:'30px'}} placeholder="Add Comment..."/>
           </FormGroup>
        </Form>
      
        </CardSubtitle>
       
        </CardBody>
        <hr width="100%"></hr>
        <CardBody>
        <CardComment />  
        <CardSubtitle style={{color:'blue', marginTop:'30px'}}>View Comment</CardSubtitle>
        </CardBody>
     
      </Card>
     
    )
  }
}
