import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sumber from './Sumber'
import CreateArticle from './components/Page/CreateArticle';
import ArticleCoverImage from './components/Page/ArticleCoverImage';
import Profile from './components/Page/Profile'
import CreateEvent from './components/Page/CreateEvent';
import Event from './components/Page/Event';
import CardArticle from './components/PartCard/CardArticle';
import CardEvent from './components/PartCard/CardEvent';
import AppPrivacy from './components/AppPrivacy'
import PageCkeEditor from './components/Page/PageCkeEditor';

import DetailArticle from './components/Page/DetailArticle';

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>

      <Switch>
            <Route exact path='/' component={Sumber} />
            <Route path='/home' component={Sumber} />
 
            <Route path='/createarticle' component={CreateArticle}/>
            <Route path='/articlecoverimage' component={ArticleCoverImage}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/createevent' component={CreateEvent}/>
            <Route path='/event' component={Event}/>
            <Route path='/profilearticle' component={CardArticle}/>
            <Route path='/profileevent' component={CardEvent}/>
            <Route path='/privacypolicy' component={AppPrivacy}/>
            <Route path='/:prodId' component={DetailArticle} />
            {/* <Route path='/pageckeeditor' component={PageCkeEditor}/> */}
       
         
            </Switch>
      </BrowserRouter>
    )
  }
}
