import React, { Component } from 'react'
import { Card, CardImg,CardTitle, CardBody, CardSubtitle, Media, Button} from 'reactstrap';
import AppFooter from '../AppFooter';
import AppNav from '../AppNav';
import axios from 'axios';

export default class DetailArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
        detail: ''
        
    }
  }

  componentDidMount(){
      let detailId = this.props.match.params.prodId
      axios.get(`https://tempgaragelife.herokuapp.com/posts/${detailId}?key=barangku`)
      .then(res => {
          console.log('data detail',res.data)
          this.setState({
              detail : res.data
          })
      })
  }
  render() {
    console.log('detail', this.state.detail)
    
    const kuy = this.props.harga  ;
    const {title,foto, content} = this.state.detail
    return (
      <div className="BodyDefault">
          <AppNav/>
          <Card  className="PageDetailArtilceCard"> 
 <CardBody>
        <CardSubtitle>   
        <Media>
      <Media>
        <CardImg className="PageDetailArticleCardImgAvatar"
      src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823" 
      />
        <Media  />
      </Media>
      <Media body>
        <Media heading className="MediaHeading"> Nama</Media>
        <small className="text-muted">Last updated 3 mins ago</small>
         </Media>
      <Button className="PageDetailArticleButtonFollow" >+ Follow </Button>
    </Media>
        </CardSubtitle>
        </CardBody>
        <CardTitle className="PageDetailArticleCardTitle">   
        <h1>{title}</h1> </CardTitle>
          <CardImg  className="PageDetailArticleCardImgContent" src={foto}/> 
           
           <div className="editor-preview">
                <div dangerouslySetInnerHTML={ { __html: content } }/>  
              </div>
       
 {/* {categories} */}
        </Card>
         
          <AppFooter/>
      </div>
    )
  }
}
