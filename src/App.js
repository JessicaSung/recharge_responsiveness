import React, { Component } from 'react';
import Form from './components/form'
import axios from 'axios'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Responders from './components/Responders'

import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './components/MapContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import NavBar from './components/NavBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: []
    }
  }
  // componentDidMount(){
  //   axios.get('http://localhost:5000/userInfo')
  //   .then(res => {
  //     this.setState({ userInfo: res.data })
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

  submitForm = (e) => {
    e.preventDefault()
    e.persist()
    console.log(e.target.name)
    navigator.geolocation.getCurrentPosition( (position)=> {         
    let loc={lat:position.coords.latitude, long:position.coords.longitude}
    let name = e.target.name.value
    let address = e.target.address.value
    let meds = e.target.Meds.value
    let medComment = e.target.medComment.value
    let power = e.target.Power.value
    let powComment = e.target.powerComment.value
    let pets = e.target.Pets.value
    let petComment = e.target.petComment.value
    let food = e.target.Food.value
    let foodComment = e.target.foodComment.value
    let injured = e.target.Injured.value
    let injComment = e.target.injComment.value
    let number = e.target.number.value
    let status = e.target.status.value
    let heat = e.target.Heat.value
    let heatComment = e.target.heatComment.value
    let disabled = e.target.Disabled.value
    let disComment = e.target.disComment.value
    let other = e.target.other.value
    let userInfo = {
      location:loc, name: name, address: address, meds: meds, medsComment: medComment, power: power, powerComment: powComment, pets: pets, petComment: petComment, food: food, foodComment: foodComment,
      injured: injured, injComment: injComment, number: number, status: status, heat: heat, heatComment: heatComment, disabled: disabled, disComment: disComment, other: other
    }
    console.log(userInfo)
    //axios.post('http://localhost:5000/userInfo', userInfo)
  })
  
    
  }
  
  render() {
    return (
      <div>

        <Header />
        <NavBar />

        {/*child component*/}
        <Switch>
          <Route path='/' exact render={(props) => (
            <MapContainer google={this.props.google} {...props} />
          )} />
          <Route path='/form' render={(props) => (
            <Form {...props} submitForm={this.submitForm} />
          )} />
          <Route path='/responders' render={(props) => (
            <Responders {...props} userInfo={this.state.userInfo} />
          )} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCWbu-9LE059vntLLU_S60zwn77qOEf8oY',
})(App)


