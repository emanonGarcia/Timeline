import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from './Main';
import Configs from './Configs'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: 'Timeline',
      iconLink: 'http://www.google.com',
      kmIconLink: 'http://www.amazon.com'
      }
  }

  render() {
    return(
      <Router>
        <div id="header-container">
          <div id='left-header-subcont'>
            <img alt='customApp Icon' src='' />
            <Link to='/'><div>{this.state.appName}</div></Link>
          </div>
          <div id='right-header-subcont'>
            <i src='' />  {/* Print icon*/}
            <Link to="/configs"><i src='' />Configs</Link>
            <div>{this.state.currentUser}</div>
            <img alt='KM Logo' src='' /> KM Logo
          </div>
          <Route exact path='/' component={Main} />
          <Route path='/configs' component={Configs} />
        </div>
      </Router>
    )
  }
}