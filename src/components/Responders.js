import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
// import { Route, Link, Switch } from 'react-router-dom';

 class Responders extends Component {
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
               <MapContainer google={this.props.google} />
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
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWbu-9LE059vntLLU_S60zwn77qOEf8oY',
  })(Responders)