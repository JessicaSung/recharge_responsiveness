import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './Map';

export class MapContainer extends Component {
    render() {
        const style = {
          width: '100vw',
          height: '100vh'
        }
        return (
          <div style={style}>
            <Map google={this.props.google}
              />
          </div>
        )
      }
    }
    
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWbu-9LE059vntLLU_S60zwn77qOEf8oY'
})(MapContainer)
