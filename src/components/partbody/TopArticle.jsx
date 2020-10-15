import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardSubtitle,  Media} from 'reactstrap';


export default class TopArticle extends Component {
  
  render() {
    return (
        <Card className="TopCard">
        <CardBody>
               <CardSubtitle style={{marginBottom:'40px'}}> 
               <h3 style={{marginBottom:'30px'}}>Top Article </h3>  
               <Media>
             <Media><CardImg className="TopCardImg"
             src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
             " />
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
               <div className="TopDiv">
                   Read More
               </div>
             </Card>
    )
  }
}
