import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardSubtitle, Media} from 'reactstrap';


export default class Notification extends Component {
  
  render() {
    return (
        <Card className="NotifCard" class="p-2 w-100 bd-highlight"> 

          <CardBody>
            <CardSubtitle>   
            <Media>
              <Media>
                <CardImg className="NotifCardImg"
               src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
            " />
              <Media  />
            </Media>
            <Media body>
            <Card style={{height:'33px', marginBottom:'6px' }} >
              <h2 style={{fontSize:'20px'}}>Nama 
              <h3>Action</h3></h2>
            </Card>
            

            <small className="text-muted">7 hours ago</small>
            </Media>

            </Media>
            </CardSubtitle>
          </CardBody>
            <hr width="100%"></hr>
            <small className="text-muted" style={{margin:'auto', fontSize:'18px', color:'#a28858'}}>3 more updates</small>
          

      </Card>
     
    )
  }
}
