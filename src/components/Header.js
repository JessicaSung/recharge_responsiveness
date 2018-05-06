import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";
import './Header.css';


class Header extends Component {
    render () {
        return (
            <Grid>
                <Jumbotron>
                    <h1 className='headerH1'> First Response Helper</h1>
                    <p>This is a website for creating a network of disaster survivors for first responders, so in an disaster relief efforts responders can know the status, needs and location of survivors. Responders can also connect survivors with good samaritans who have listed free aid (water, food, clothes) in a survivor's area.</p>
                </Jumbotron>
            </Grid>
        )
    }
}

export default Header