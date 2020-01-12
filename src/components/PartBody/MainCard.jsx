import React, { Component } from 'react'
import ReactHtml from 'raw-html-react';
import { Card, CardImg, CardBody, Row, CardTitle, CardSubtitle, Form, FormGroup, Button, Input, Media} from 'reactstrap';
import CardComment from './CardComment';
import axios from 'axios';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';
import CreateArticle from '../Page/CreateArticle';
import ReactDOMServer from 'react-dom/server';


class MainCard extends Component {

  constructor( props ) {
    super(props );
  
    this.state = {
        title: '',
        foto:'',
        products: []
    };
  }
  render() { 
    // const kuy = this.props.harga  ;
    return (
      <div>
        <Card  class="p-2 w-100 bd-highlight" className="MainCard2" > 
          <CardBody>
           <CardSubtitle>   
            <Media>
              <Media>
                <CardImg className="PageDetailArticleCardImgAvatar" src="
                https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
                " />
              <Media  />
              </Media>
                <Media body>
                  <Media heading className="MainCardMediaNama"  >
                  Nama
                  </Media>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Media>
              <Button className="MainCardBtnFollow">+ Follow </Button>
              </Media>
            </CardSubtitle>
          </CardBody>
                
          <CardTitle> 
            <CardImg style={{height:'375px', width:'725px'}}  src={this.props.foto} /> 
          </CardTitle>

                    
          <CardBody>
            <CardTitle className="MainCardTitle">{this.props.title}  </CardTitle>     
                
            <CardSubtitle className="MainCardCategories" >  
              {/* <div className="editor-preview">
                <div dangerouslySetInnerHTML={ { __html: kuy } }/>  
              </div> */}
            </CardSubtitle>
                  
          </CardBody>
          <hr width="100%"></hr>
          <CardBody>
            <CardSubtitle>
              <Form>
                <FormGroup>
                  <Input valid className="MainCardInputComment" placeholder="Add Comment..."/>
                </FormGroup>
              </Form>  
            </CardSubtitle>
          </CardBody>
                  <hr width="100%"></hr>
          <CardBody>
            <CardSubtitle style={{color:'blue', marginTop:'30px'}}>View Comment</CardSubtitle>
          </CardBody>
        {/* <CardComment />   */}       
        </Card>
      </div>
    )
  }
}




export default MainCard;
