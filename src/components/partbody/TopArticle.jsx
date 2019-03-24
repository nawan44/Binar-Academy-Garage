import React, { Component } from 'react'
import { Card, CardImg, CardBody, FormFeedback, FormText,
    CardTitle, CardSubtitle, Form, FormGroup, Badge, Input, Media} from 'reactstrap';


export default class TopArticle extends Component {
  
  render() {
    return (
        <Card style={{ marginTop:'20px', marginBottom:'20px',
        width:'346px', height:'435px', borderRadius:'5px', boxShadow:'0 4px 4px 0 rgba(0, 0, 0, 0.1)  ', border:'solid 1px #d6d6d6' ,backgroundColor:'#ffffff'}}>
        <CardBody>
               <CardSubtitle style={{marginBottom:'40px'}}> 
               <h3 style={{marginBottom:'30px'}}>Top Article </h3>  
               <Media>
             <Media><CardImg style={{width:'70px', height:'70px', marginRight:'10px'}} src="
             https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
             " className="Icon"
             />
               <Media  />
             </Media>
             <Media body>
               <Media heading className="MediaHeading" > 
                 10 Gaya Motor Custom
               </Media>
               <small className="text-muted">Last updated 3 mins ago</small>
                </Media>
       
                
           </Media>
               </CardSubtitle>
               </CardBody>
               <hr width="100%"></hr>

               <div style={{color:'blue', textAlign:'center',  padding:'10px'}}>
                   Read More
               </div>
             </Card>
    )
  }
}
