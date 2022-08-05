import React, { Component }  from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const customStyles = {
  mapContainer : {
    background: "#e7e7e7",
    marginBottom: "1rem",
    width: "30rem",
    height: "25rem",
    marginRight: "1rem"
  },
  map : {
    width: "30rem",
    height: "25rem",
  }
}

export class MapComponent extends Component {
  render() {
    return (
      <div style={customStyles.mapContainer}>
        <Map
        google={this.props.google}
        zoom={14}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
        style={customStyles.map}
      />
      </div>
    );
  }
}

// export default MapComponent

export default GoogleApiWrapper({
  apiKey: "AIzaSyD-hFjlR7TreixnJZ7oADH9CqlMpUjlUys"
})(MapComponent)