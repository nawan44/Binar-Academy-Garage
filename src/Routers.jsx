import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Sumber from './Sumber'



export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route exact path='/' component={Sumber} />
            
        </div>
      </BrowserRouter>
    )
  }
}
