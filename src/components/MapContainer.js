import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class MapContainer extends Component {
  // ======================
  // ADD LOCATIONS TO STATE
  // ======================
  state = {
    locations: [
      {
        status: "Priority",
        location: { lat: 30.2849835, lng: -97.7168484 },
        info: {
          personName: "Shailaja Ezgi",
          address: "5403 Cameron Rd ste 100, Austin, TX 78723",
          people: "3"
        }
      },
      {
        status: "Good",
        location: { lat: 30.3031501, lng: -97.6989055 },
        info: {
          personName: "Cassian Husayn",
          address: "2406 Manor Rd D, Austin, TX 78722",
          people: "1"
        }
      },
      {
        status: "Secondary",
        location: { lat: 30.3118569, lng: -97.7059543 },
        info: {
          personName: "Elva Annegret",
          address: "1801 E 51st St #410, Austin, TX 78723",
          people: "2"
        }
      }
    ]
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign(
        {},
        {
          center: { lat: 30.2672, lng: -97.7431 },
          zoom: 11,
          mapTypeId: "roadmap"
        }
      );

      this.map = new maps.Map(node, mapConfig);

      // ==================
      // ADD MARKERS TO MAP
      // ==================
      this.state.locations.forEach(location => {
        const marker = new google.maps.Marker({
          position: { lat: location.location.lat, lng: location.location.lng },
          map: this.map,
          title: location.name,
          info: location.info
        });
        const infowindow = new google.maps.InfoWindow({
          content: `
          <p><b>Name:</b> ${location.info.personName}</p>
          <p><b>Status:</b> ${location.status}</p>
          <p><b>Address:</b> ${location.info.address}</p>
          <p><b>Number of People:</b> ${location.info.people}</p>
          `
        });
        marker.addListener("click", function() {
          infowindow.open(this.map, marker);
        });
      });
    }
  }

  render() {
    const style = {
      // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: "90vw", // 90vw basically means take up 90% of the width screen. px also works.
      height: "75vh" // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    };

    return (
      // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    );
  }
}
