import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";
import './Header.css';


class Header extends Component {
    render () {
        return (
            <Grid>
                <Jumbotron>
                    <h1 className='headerH1'>Mark Me Safe</h1>
                    <p>This site creates a network of disaster survivors to provide first responders with the status, needs, and location of survivors. Responders can connect survivors with Good Samaritans who have listed free aid (food, water, clothes) in a survivor's area.</p>
                </Jumbotron>
            </Grid>
        )
    }
}

export default Header