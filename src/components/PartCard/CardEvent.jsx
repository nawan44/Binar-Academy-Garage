import React, { Component } from 'react'
import { Card, CardImg, CardBody, Container, CardTitle, CardSubtitle, Row, Col,  Media} from 'reactstrap';
import Tiga from '../Image/tiga.jpeg'
import Pencil from '../Image/pencil.png'
import AppFooter from '../AppFooter';
import AppNav from '../AppNav';
import axios from 'axios';

import { Link } from 'react-router-dom';
export default class CardEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products:[],
        }
      }
      
    //get data with axios method get
    componentDidMount(){
    axios.get('http://reduxblog.herokuapp.com/api/posts?key=barangku')
    .then(res=> {
        this.setState({
          products: res.data
        })
      })  
    }
  render() {    
    console.log('ini data', this.state.products)
    const looping = this.state.products.map((prod, index) => {
      return(
      <Row>
        <Col xs="6" key={index}   >          
          <Card class="p-2 w-100 bd-highlight"  className="PartCardEventCard"> 
            <CardBody>
              <CardSubtitle>   
                <Media>
                  <Media>
                    <CardImg  className="PartCardEventCardImg" src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
                      " />
                  <Media/>
                  </Media>
                  <Media body>
                    <Media heading className="MainCardMediaNama">  Nama </Media>
                      <small className="text-muted">Last updated 3 mins ago</small>
                  </Media>
                  <Media>
                    <CardImg className="PartCardArticle" src={Tiga}/>
                  <Media  />
                  </Media>
                </Media>
                </CardSubtitle>
              </CardBody>
              <CardTitle> 
                <CardImg className="PartCardTitle" src={prod.title}/> 
              </CardTitle>       
                <Row>
                  <Col className="PartCardColx3" xs="3" >{prod.categories}</Col>
                  <Col xs="auto" className="PartCardColxauto"  ><h2>{prod.content}</h2></Col>
                </Row>
          </Card>
        </Col>
      </Row>
    )}
    
  );
    return (
      <div >
        <AppNav/>
        <div className="BodyDefault" style={{marginBottom:'30px'}}>
          <Row  className="PartCardRow">    
            <Col style={{margin:'auto'}}>
              <Media>
                <Media>
                  <CardImg src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
                                " className="PartCardImg"/>
                <Media  />
                </Media>
              <Media body>
                <Media heading className="MainCardMediaNama" > Nama 
                    <CardImg   src={Pencil} className="PardCardImgEdit" />
                </Media>
              <small className="text-muted" style={{fontSize:'24px'}}>xxx@gmail</small>
            <Row style={{marginTop:'20px'}}>
              <Col xs="6" sm="4" className="PartCardCol">15 Posts</Col>
              <Col xs="6" sm="4" className="PartCardCol">86 Followers</Col>
              <Col sm="4" className="PartCardCol">90 Following</Col>
            </Row>
              </Media>
              </Media>
              </Col>
            </Row>

          <Container>
            <Row className="PartCardRow2">
              <Col xs="6" className="PartCardEventColx6"><Link to='/profilearticle'>Article</Link></Col>
              <Col xs="6" className="PartCardEventColx6"><Link to='/profileevent'>Event</Link></Col>
            </Row>

            <Row className='d-flex'>
              {looping}
            </Row>
          </Container>
          </div>
          <AppFooter/>
        </div>
    )
  }
}
