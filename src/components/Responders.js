import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
// import { Route, Link, Switch } from 'react-router-dom';

export default class Responders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: ''
        };
    }

    handleFilterList=(param, type)=>{
        let list = this.props.userInfo.filter((item)=>{
            return item.type === param
        })
        return list;
    }

    render() {
        return (
            <div>
               
                <ButtonToolbar>
                    <Button onClick={()=>this.handleFilterList("yes", "food")}>Food/Water</Button>
                    <Button>Heat/AC</Button>
                    <Button>Injuries</Button>                    
                    <Button>Medications</Button>
                    <Button>Power</Button>
                    <Button>Other</Button>
                </ButtonToolbar>
            </div>
        );
    }
}