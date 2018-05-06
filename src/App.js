import React, { Component } from 'react';
import './App.css';
import Form from './components/form'
import axios from 'axios'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Responders from './components/Responders'

class App extends Component {
  constructor(){
    super()
   this.state={
     userInfo:[]
   }
  }
  // componentDidMount(){
  //   axios.get('http://localhost:5000/userInfo')
  //   .then(res => {
  //     this.setState({ classrooms: res.data })
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }
  
  submitForm=(e)=>{
e.preventDefault()
let name=e.target.name.value
let address=e.target.address.value
let meds=e.target.Meds.value
let medComment=e.target.medComment.value
let power=e.target.Power.value
let powComment=e.target.powerComment.value
let pets=e.target.Pets.value
let petComment=e.target.petComment.value
let food=e.target.Food.value
let foodComment=e.target.foodComment.value
let injured=e.target.Injured.value
let injComment=e.target.injComment.value
let number=e.target.number.value
let status=e.target.status.value
let heat=e.target.Heat.value
let heatComment=e.target.heatComment.value
let disabled=e.target.Disabled.value
let disComment=e.target.disComment.value
let other=e.target.other.value
let userInfo={name:name, address:address, meds:meds, medsComment:medComment,power:power, powerComment:powComment,pets:pets, petComment:petComment, food:food, foodComment:foodComment,
injured:injured, injComment:injComment, number:number, status:status, heat:heat, heatComment:heatComment, disabled:disabled, disComment:disComment, other:other}
//axios.post('http://localhost:5000/userInfo', userInfo)
console.log(userInfo)
  }
  render() {
    return (
      <div>
         <h1 className='title'>Mark Me Safe</h1>
        <div className='navBar'>
        <button className='navBarButton'><Link to='/form'>Info Form</Link></button>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/responders'>First Responders</Link></button>
        </div>
<Switch>
  <Route path='/'exact render={(props)=>(
    <Home {...props}/>
  )}/>
  <Route path='/form'render={(props)=>(
    <Form {...props}submitForm={this.submitForm}/>
  )} />
<Route path='/responders' render={(props)=>(
  <Responders {...props} userInfo={this.state.usrInfo}/>
)}/>
</Switch>
      </div>
    );
  }
}

export default App;
