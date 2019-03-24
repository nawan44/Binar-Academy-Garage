import React, { Component } from 'react'

import { Card, CardImg, CardBody,
 CardSubtitle, Form, FormGroup, Badge, Input, Media} from 'reactstrap';
export default class CardComment extends Component {
  
  render() {
    return (
        <Card style={{backgroundColor:'yellow', width:'680px'}}>
        <CardBody>
           
            <CardSubtitle style={{marginBottom:'50px'}}> 
          
                              <Media>
             <Media><CardImg style={{borderRadius:'50%', width:'70px', height:'70px', marginRight:'22px'}} src="
             https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
             " className="Icon"
             />
               <Media  />
             </Media>
             <Media body>
               <div style={{color:'#1d1d1d',  fontSize:'22px', height:'26px',
               fontFamily: 'Roboto',
               textAlign:'left',paddingTop:'20px', fontSize:'18px'}}>
               
                Nama
                <small style={{marginLeft:'13px',
              color:'#8c8c8c',  fontSize:'16px', height:'19px',
              fontFamily: 'Roboto',  fontWeight:'300'
              }} 
                className="text-muted">Last updated 3 mins ago</small>
               
            
               </div>
 
                </Media>

                <CardSubtitle style={{width:'auto'}}> 
                  <div>Like .</div><div>Reply</div>
                </CardSubtitle>
                
           </Media>
               </CardSubtitle>
               </CardBody>

            
               
               
             </Card>
             

    )
  }
}
