import React, { Component } from 'react';
import { Form, FormGroup, Col, Container, Input, Row,  Button} from 'reactstrap';
import axios from 'axios';
import CKEditor from 'ckeditor4-react';
import AppNav from '../AppNav';
import AppFooter from '../AppFooter';
import AddMedia from '../PartBody/AddMedia';
import MainCard from '../PartBody/MainCard'

class  CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {

      products: [],
      title: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind( this );
    this.onEditorChange = this.onEditorChange.bind( this );
    this.updateData = this.updateData.bind(this)

  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value })
}
handleSubmit = event => {
  event.preventDefault();
  axios.post('http://tempgaragelife.herokuapp.com/posts',
  {
      title: this.state.title,
      content: this.state.content
  }
  )
      .then(res => {
              alert('Artikel Berhasil Dibuat')
              this.updateData()
          }
      )
}
onEditorChange( evt ) {
  this.setState( {
    content: evt.editor.getData()
  } );
}

handleChange( changeEvent ) {
  this.setState( {
    content: changeEvent.target.value
  } );
}


updateData(){
  axios.get('http://tempgaragelife.herokuapp.com/posts')
  .then(res => {
      this.setState({
        products: res.data
      })
  });
}

componentDidMount(){
  axios.get('http://tempgaragelife.herokuapp.com/posts')
  .then(res => {
      this.setState({
        products: res.data
      })
  });
}


    render() {
      console.log('test', this.state.products)
       this.state.products.map((prod, index) => {
          return(
            <Col key={index}>
            <MainCard
              title={prod.title}
              content={prod.content}
              color='primary'
            />
          </Col>
          )}
        );

      return(
            <div className="BodyDefault">
      <AppNav/> 
          <div className="CreateArticleBody">
            <Container  >
              
        {/* <Row class="row " tabId="1"> */}
        {/* <Col class="col-sm-4" >	
        <AddMedia/>
          </Col> */}
          {/* <Col  class="col-sm-8" >  */}
				 {/* <div style ={{ width: '800px',  padding:'30px',height: '1145px', borderRadius: '5px', boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.1)',
                backgroundColor: '#ffffff'}}>
             */}
             
             <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input type="text" name= 'this.state.title' id="title" placeholder="Article Title"  
                onChange={this.handleTitleChange} />
              </FormGroup>

              <CKEditor
                      onclick="alert(CKEDITOR.instances.editor1.getData());"
                      content={this.state.content}
                          onChange={this.onEditorChange} />

              <Button style={{marginTop:'30px'}} color='primary' type="submit" >Buat Artikel </Button>

            </Form>              
                  {/* </div>*/}
        {/* </Col> */}
        {/* </Row> */}
        </Container>
        </div>
      <AppFooter/>
    </div>
        );
    }
}


export default CreateArticle;