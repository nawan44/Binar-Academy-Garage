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
      <div style={{backgroundColor:'grey', padding :'20px' }}> 
    
        <AppCarousel />
				<Container>
        <Row>
          <Col xs="6">	<MainCard /></Col>
          <Col xs="6"><Account/>
		<TopArticle/>
	<Sugestion/>
					</Col>
			
        </Row>

      </Container>
		
        
						

		
      </div>
    )
  }
}
