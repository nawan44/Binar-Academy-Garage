import React, { Component } from 'react'
import { Card, CardImg, CardBody, Button, Container,  CardTitle, CardSubtitle, Row, Col,  Media} from 'reactstrap';
import clock from '../Image/clock.png'
import kalender from '../Image/kalender.svg'
import location from '../Image/placeholder.png'
import pencil from '../Image/pencil-edit.png'
import AppFooter from '../AppFooter';
import Account from '../Member/Account';
import TopArticle from '../PartBody/TopArticle';
import Sugestion from '../PartBody/Suggestion';
import AppNav from '../AppNav';


export default class Event extends Component {
  
  render() {
    return (
      <div style={{backgroundColor:'#ececec'}}>
        <AppNav/>
<Container >
        <Row>
        <Col xs={12} md={8} >	
          
          <Card  class="p-2 w-100 bd-highlight" className="PageEventCard" > 
 <CardBody>
        <CardSubtitle>   
        <Media>
      <Media><CardImg src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
      " className="PageDetailArticleCardImgAvatar" />
        <Media  />
      </Media>
    <Media body>
        <Media heading className="MediaHeading" style={{height:'33px', fontSize:'28px', marginBottom:'6px' }} >
         Nama
        </Media>
        <small className="text-muted">Last updated 3 mins ago</small>
         </Media>
         <Button className="PageEventButton">Join</Button>
         
    </Media>
        </CardSubtitle>
        </CardBody>
      
          <CardTitle> 
            <CardImg style={{height:'375px', width:'775px', margin:'auto'}} 
          src=" https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
                   "/> 
          </CardTitle>      

        <CardBody>
            
        <Row>
          <Col xs="3" className="PageEventColX3" >28 Maret</Col>
          <Col xs="auto" className="PageEventColAuto" >Ayo Ikuti Touring Peduli Lombok Lorem Ipsum Dolor</Col>
        </Row>
        <hr width="100%"></hr>        
        <Media>
      <Media><CardImg  src={kalender} className="PageEventCardImg"/>
        <Media  />
      </Media>
      <Media body>
        <Media heading className="PageEventMedia" >
        Friday, 29 March 2019 
        </Media>
         </Media>
    </Media>

    <Media>
      <Media><CardImg  src={clock} className="PageEventCardImg"/>
        <Media  />
      </Media>
      <Media body>
        <Media heading className="PageEventMedia"  > 12.00 - 15.00
        </Media>
         </Media>
    </Media>


    <Media>
      <Media><CardImg  src={location} className="PageEventCardImg"/>
        <Media  />
      </Media>
      <Media body>
        <Media heading className="PageEventMedia" >
        Wisata Kota Tua Jakarta
        </Media>
         </Media>
    </Media>

    <Media>
      <Media><CardImg src={pencil} className="PageEventCardImg"/>
        <Media  />
      </Media>
      <Media body>
        <Media heading className="PageEventMedia" >It is a long established fact that a reader will b
        </Media>
         </Media>
    </Media>
        </CardBody>
        
      </Card>
          </Col>
          <Col xs={6} md={4}>
          < Account/>
	    	  <TopArticle/>
        	<Sugestion/>
					</Col>
			
        </Row>

      </Container>


      <AppFooter/>
      </div>
    )
  }
}
