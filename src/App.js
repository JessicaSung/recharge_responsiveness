import React, { Component } from 'react';
import './App.css';
import Form from './components/form'
import Responders from './components/Responders'

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Responders />
      </div>
    );
  }
}

export default App;
