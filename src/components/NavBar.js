import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/">
                                Home
                            </NavItem>
                            <NavItem eventKey={2} href="/form">
                                Info Form
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={3} href="/responders">
                                First Responders
                            </NavItem> 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
            </div>
        );
    }
}