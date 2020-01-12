import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class AppFooter extends Component {
  
  render() {
    return (
      <div className="app-footer" style={{backgroundColor:'#1d1d1d'}}>
      <footer class="container" style={{padding:'20px', textAlign:'center', color:'#a28858'}} >
<p>&copy; GarageLife Inc. All rights reserved</p>     
</footer> 
      
        <div style={{color: '#a28858'}}>
          <Link to="/privacypolicy">pravicy policy</Link>
        </div>
      
     </div>
    )
  }
}