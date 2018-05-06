import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react'; 
import Form from './components/form'
import MapContainer from './components/MapContainer';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MapContainer google={this.props.google} />
        <Form />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCWbu-9LE059vntLLU_S60zwn77qOEf8oY',
})(App)
