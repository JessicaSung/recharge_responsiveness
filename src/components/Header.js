import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";
import './Header.css';


class Header extends Component {
    render () {
        return (
            <Grid>
                <Jumbotron>
                    <h1 className='headerH1'>Mark Me Safe</h1>
                    <p>This is a website for creating a network of disaster survivors for first responders, so in disaster relief efforts responders can know the status, needs and locations of survivors. Responders can connect survivors with good samaritans who have listed free aid (food, water, clothes) in a survivor's area.</p>
                </Jumbotron>
            </Grid>
        )
    }
}

export default Header