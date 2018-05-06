import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>
                <button className='navBarButton'><Link to='/'>Home</Link></button>                
                <button className='navBarButton'><Link to='/form'>Info Form</Link></button>
                <button className='navBarButton floatButton'><Link to='/responders'>Responders</Link></button>
            </div>
        );
    }
}

