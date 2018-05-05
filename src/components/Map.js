import React, { Component } from 'react'
import { GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = (props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 30.2672, lng: -97.7431 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>

<MyMapComponent isMarkerShown />// Map with a Marker
<MyMapComponent isMarkerShown={false} />// Just only Map

export default Map
