import React, { Component } from 'react'
import { Button,Card, CardImg, CardBody,CardSubtitle, Media} from 'reactstrap';


export default class Sugestion extends Component {
  
  render() {
    return (
        <Card class="w3-container" className="SuggestionCard">
        <CardBody>
           
            <CardSubtitle style={{marginBottom:'50px'}}> 
            <h3 className="SuggestionCardh3" >Sugestion For You </h3>  
              <Media>
             <Media><CardImg className="PageDetailArticleCardImgAvatar" style={{marginRight:'10px'}} 
             src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
             "/>
               <Media  />
             </Media>
             <Media body>
                <div className="SugestionNama">Nama</div>
                </Media>
                <div className="SugestionDivButton"> 
                <Button class="w3-button w3-circle w3-black"  className="SugestionBtn" > + </Button>
                </div>    
            </Media>
               </CardSubtitle>
               </CardBody>
               <hr width="100%"></hr>
               <div className="SugestionDivSee" >See All</div>
             </Card>
    )
  }
}
