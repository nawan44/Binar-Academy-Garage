import React, { Component } from 'react'
import AppCarousel from './AppCarousel'
import MainCard from './partbody/MainCard'
import TopArticle from './partbody/TopArticle';
import { Container} from 'reactstrap';



export default class AppBody extends Component {
  
  render() {
    return (
      <div style={{backgroundColor:'grey', padding :'70px' }}> 
    
        <AppCarousel />
<Container  style={{flex :'2', 
  flexDirection: 'row'}} >
			<MainCard />
				<TopArticle/>

</Container>
        
						

		
      </div>
    )
  }
}
