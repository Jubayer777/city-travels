//imported file list
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./GMap.css"
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 23.81,
      lng: 90.41
    },
    zoom: 11
  };

render() {
    return (
      //showing google map
      <div className="map-area">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCgn53Be8YmQWgn1x0DufB_T0hcWT9LilY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={23.8103}
            lng={90.4125}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;