import React, { Component } from 'react';
import './App.css';
import Form from './components/form'
import { GoogleApiWrapper } from 'google-maps-react'; 
import MapContainer from './components/MapContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1> First Response Person Finder </h1>
        <MapContainer google={this.props.google} />
        <Form />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCWbu-9LE059vntLLU_S60zwn77qOEf8oY',
})(App)
