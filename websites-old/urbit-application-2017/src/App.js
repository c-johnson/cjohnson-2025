import React, { Component } from 'react';
import './App.css';
import { mockFetch } from './mockfetch.js';

class App extends Component {
  render() {
    mockFetch('/users', {type: 'alle'})
    .then(response => {
      console.log('users! = ', response.data)
    })
    .catch(response => {
      console.log('error! = ', response.error)
    })

    return (
      <p style={{margin: '40px auto', width: '960px'}}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    );
  }
}

export default App;
