import React, { Component } from "react";
import ReactDOM from "react-dom";
import './MapContainer.css';

export default class MapContainer extends Component {
  // ======================
  // ADD LOCATIONS TO STATE
  // ======================
  state = {
    locations: [
      {
        status: "Priority",
        iconImage: '../img/redIcon.png',
        location: { lat: 30.2849835, lng: -97.7168484 },
        info: {
          personName: "Shailaja Ezgi",
          address: "5403 Cameron Rd ste 100, Austin, TX 78723",
          people: "3",
          icons: '<img src="../img/water.png"/><img src="../img/meds.png"/><img src="../img/power.png"/>'
        }
      },
      {
        status: "Good",
        iconImage: '../img/greenIcon.png',
        location: { lat: 30.3031501, lng: -97.6989055 },
        info: {
          personName: "Cassian Husayn",
          address: "2406 Manor Rd D, Austin, TX 78722",
          people: "1",
          icons: '<img src="../img/water.png"/><img src="../img/pets.png"/>'
          
        }
      },
      {
        status: "Secondary",
        iconImage: '../img/yellowIcon.png',
        location: { lat: 30.3118569, lng: -97.7059543 },
        info: {
          personName: "Elva Annegret",
          address: "1801 E 51st St #410, Austin, TX 78723",
          people: "2",
          icons: '<img src="../img/elderly.png"/><img src="../img/hungry.png"/><img src="../img/injury.png"/>'
          
        }
      },
      {
        status: "Priority",
        iconImage: '../img/redicon.png',
        location: { lat: 30.2920433, lng: -97.7343535 },
        info: {
          personName: "Milford Keeleigh",
          address: "3000 Duval St, Austin, TX 78705",
          people: "3",
          icons: '<img src="../img/water.png"/><img src="../img/meds.png"/><img src="../img/power.png"/>'
        }
      },
      {
        status: "Good",
        iconImage: '../img/greenIcon.png',
        location: { lat: 30.2674072, lng: -97.7396965 },
        info: {
          personName: "Angela Silvius",
          address: "316 E 6th St, Austin, TX 78701",
          people: "1",
          icons: '<img src="../img/water.png"/><img src="../img/pets.png"/>'
          
        }
      },
      {
        status: "Secondary",
        iconImage: '../img/yellowIcon.png',
        location: { lat: 30.3274345, lng: -97.7394283 },
        info: {
          personName: "Halil Körbl",
          address: "5343 Burnet Rd, Austin, TX 78756",
          people: "2",
          icons: '<img src="../img/elderly.png"/><img src="../img/hungry.png"/><img src="../img/injury.png"/>'
          
        }
      },
        {
          status: "Priority",
          iconImage: '../img/redIcon.png',
          location: { lat: 30.2821396, lng: -97.7424431 },
          info: {
            personName: "Helka Mario",
            address: "1900 Guadalupe St, Austin, TX 78705",
            people: "4",
            icons: '<img src="../img/water.png"/><img src="../img/meds.png"/><img src="../img/power.png"/>'
          }
        },
        {
          status: "Good",
          iconImage: '../img/greenIcon.png',
          location: { lat: 30.2920525, lng: -97.7343535 },
          info: {
            personName: "Anna Ruadhán",
            address: "3000 Duval St, Austin, TX 78705",
            people: "1",
            icons: '<img src="../img/water.png"/><img src="../img/pets.png"/>'
            
          }
        },
        {
          status: "Secondary",
          iconImage: '../img/yellowIcon.png',
          location: { lat: 30.3187477, lng: -97.7390528 },
          info: {
            personName: "Euaristos Kris",
            address: "4729 Burnet Rd, Austin, TX 78756",
            people: "5",
            icons: '<img src="../img/elderly.png"/><img src="../img/hungry.png"/><img src="../img/injury.png"/>'
            
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
          info: location.info,
          icon: location.iconImage
        });
        const infowindow = new google.maps.InfoWindow({
          content: `
          <p><b>Name:</b> ${location.info.personName}</p>
          <p><b>Status:</b> ${location.status}</p>
          <p><b>Address:</b> ${location.info.address}</p>
          <p><b>Number of People:</b> ${location.info.people}</p>
          <p>${location.info.icons}</p>
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
