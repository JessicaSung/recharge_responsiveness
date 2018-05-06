import React, { Component } from 'react';
import './App.css';
import Form from './components/form'
import MapContainer from './components/MapContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <MapContainer />
      </div>
    );
  }
}

export default App;
