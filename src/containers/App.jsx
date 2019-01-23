import React, {Component } from 'react';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div id='main-container'>
        <Header></Header>
        This is main container
      </div>
    )
  }
}