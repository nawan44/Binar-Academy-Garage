import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Routers'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Style/Member.css'
import './components/Style/Main.css'
import './components/Style/Page.css'
import './components/Style/PartCard.css'
import './components/Style/PartBody.css'



ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
