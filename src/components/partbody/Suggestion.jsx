import React, { Component } from 'react'
import { Button,Card, CardImg, CardBody, FormFeedback, FormText,
    CardTitle, CardSubtitle, Form, FormGroup, Badge, Input, Media} from 'reactstrap';


export default class Sugestion extends Component {
  
  render() {
    return (
        <Card style={{marginTop:'20px', marginBottom:'20px',
        width:'346px', height:'435px', borderRadius:'5px', boxShadow:'0 4px 4px 0 rgba(0, 0, 0, 0.1)  ', border:'solid 1px #d6d6d6' ,backgroundColor:'#ffffff'}}>
        <CardBody>
           
            <CardSubtitle style={{marginBottom:'50px'}}> 
            <h3 style={{marginBottom:'30px'}}>Sugestion For You </h3>  

           
                              <Media>
             <Media><CardImg style={{borderRadius:'50%', width:'70px', height:'70px', marginRight:'10px'}} src="
             https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
             " className="Icon"
             />
               <Media  />
             </Media>
             <Media body>
               <div style={{color:'#414141', textAlign:'left',paddingTop:'20px', fontSize:'18px', marginLeft:'10px'}}>
                Nama
               </div>
 
                </Media>
                <div style={{textAlign:'left',paddingTop:'10px', marginLeft:'5px'}}> 
                <Button style={{borderRadius:'100%', width:'40px', 
                height:'40px',backgroundColor:'blue', color:'white',  
                fontSize: '25px',fontStyle:'bold', paddingBottom:'40px'
                }}> + </Button>
                
                </div>
                
           </Media>
               </CardSubtitle>
               </CardBody>
               <hr width="100%"></hr>
               <div style={{color:'blue', textAlign:'center',  padding:'10px'}}>
    See All
</div>

             </Card>
    )
  }
}