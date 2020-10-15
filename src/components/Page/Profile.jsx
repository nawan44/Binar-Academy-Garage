import React, { Component } from 'react'
import { Card, CardImg, CardBody, Button, Container, CardTitle, CardSubtitle, Row, Col,  Media} from 'reactstrap';
import Tiga from '../Image/tiga.jpeg'
import Pencil from '../Image/pencil.png'
import AppFooter from '../AppFooter';
import AppNav from '../AppNav';
import { Link } from 'react-router-dom';


export default class Profile extends Component {
  
  render() {
    // console.log('ini data', this.state.products)
    // const looping = this.state.products.map((prod, index) => {
    //   return(
    //     <Col key={index}>
    //      <MainCard
    //     image={prod.title}
    //     kategori ={prod.categories}
    //     harga={prod.content}
    //     />
    //     </Col>

    //   )}
    
    // );
    return (
      <div >
        <AppNav/>
        <div style={{backgroundColor:'#ececec',  marginBottom:'30px'}}>
        <Row className="PageProfileRow" >
          
<Col style={{margin:'auto'}}>
        <Media>
      <Media><CardImg className="PageProfileAvatar"
      src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
      " />
        <Media  />
      </Media>
      <Media body>
        <Media heading className="MediaHeading" style={{height:'33px', fontSize:'24px', marginBottom:'6px' }} >
         Nama 
         <CardImg src={Pencil} className="PageProfileEdit"  />
        </Media>
        <small className="text-muted" style={{fontSize:'24px'}}>xxx@gmail</small>
        <Row style={{marginTop:'20px'}}>
          <Col xs="6" sm="4" className="PageProfileXS6">15 Posts</Col>
          <Col xs="6" sm="4" className="PageProfileXS6">86 Followers</Col>
          <Col sm="4" className="PageProfileXS6">90 Following</Col>
        </Row>
         </Media>
    </Media>
    </Col>
       
        </Row>
<Container>
        <Row className="PageProfileContainerRow">
          <Col xs="6" className="PageProfileXS6ArticleEvent" >
          <Link to='/profilearticle'>Article</Link></Col>
          <Col xs="6" className="PageProfileXS6ArticleEvent">
          </Col>
        </Row>

        <Row>
          <Col xs="6" >
          
          <Card  class="p-2 w-100 bd-highlight" className="PageProfileCard"> 
 <CardBody>
        <CardSubtitle>   
        <Media>
      <Media><CardImg className="PageDetailArticleCardImgAvatar"
      src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
      "  />
        <Media  />
      </Media>
      <Media body>
        <Media heading className="MediaHeading" style={{height:'33px', fontSize:'28px', marginBottom:'6px' }} >
         Nama
        </Media>
        <small className="text-muted">Last updated 3 mins ago</small>
         </Media>
         <Media><CardImg style={{width:'5px', height:'25px', marginTop:'15px', backgroundColor: '#8c8c8c' }} src={Tiga} className="Icon"
      />
        <Media  />
      </Media>
         
    </Media>
        </CardSubtitle>
        </CardBody>
       
          <CardTitle> 
            <CardImg style={{height:'248px', width:'560px'}} 
          src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
                   "/> 
          </CardTitle>       
 
        <CardBody>
            <CardTitle className="PageProfileCardTitle" > Custom</CardTitle>
        <CardSubtitle >
        <h2  className="PageProfileCardSubtitleh2">CHOPPERLAND RE 350 VS CHOPPERLAND SR 400</h2></CardSubtitle>
        </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>

</div>
      <AppFooter/>
      </div>
    )
  }
}
