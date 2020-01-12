import React, { Component } from 'react'
import MainCard from './PartBody/MainCard'
import { Link } from 'react-router-dom';
import TopArticle from './PartBody/TopArticle';
import Account from './Member/Account';
import Sugestion from './PartBody/Suggestion';
import axios from 'axios';
import { Container, Row, Col} from 'reactstrap';

export default class AppBody extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      products:[]
    }
  }

  
//get data with axios method get
componentDidMount(){
axios.get('https://tempgaragelife.herokuapp.com/posts')
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
        <Col key={index}>
     <Link to={`/${prod.id}`}>
         <MainCard
        title={prod.title}
        foto ={prod.foto}
        // harga={prod.categories}
        />
        </Link>
        </Col>
      )}
    
    );
    return (
      <div style={{backgroundColor:'#f2f2f2'}}>
         
         <Container >
         <Row>
         <Col xs={12} md={8} >	
         {looping}  
          </Col>
          <Col xs={6} md={4}     > 
           {/* <SideCard/> */}
           <Account/>
	 	      <TopArticle/>
	        <Sugestion/>
	 				</Col> 
         </Row>         
       </Container>
      </div>
    )
  }
}