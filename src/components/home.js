import React, {Component} from 'react'
import { Route, Link, Switch } from 'react-router-dom'

class Home extends Component{
    render(){
        return(
<div>
       
        <p className='info'>Mark Me Safe is an app that lets first responders know your current situation, if you need assistance and what type of assistance you need</p>
<p className='info'> It also contains a map that shows the current location of hospitals, water stations and supplies that you may need.</p>
<img className='map'src='./images/hospitals.png'/>
</div>
        )
    }
}
export default Home