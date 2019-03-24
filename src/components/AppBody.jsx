import React, { Component } from 'react'
import AppCarousel from './AppCarousel'
import MainCard from './partbody/MainCard'
import TopArticle from './partbody/TopArticle';
import Account from './partbody/Account';
import Sugestion from './partbody/Suggestion';


import { Container, Row, Col} from 'reactstrap';



export default class AppBody extends Component {
  
  render() {
    return (
      <div style={{backgroundColor:'#ececec'}} > 
    
        <AppCarousel />
				<Container >
        <Row>
        <Col xs={12} md={8}
           style={{backgroundColor:'red'}} 
          >	<MainCard /></Col>
          <Col xs={6} md={4}
          style={{backgroundColor:'green'}}   
          > <Account/>
		<TopArticle/>
	<Sugestion/>
					</Col>
			
        </Row>

      </Container>
		
        
						

		
      </div>
    )
  }
}
