/*global google*/

import './style.css';
import { GoogleMap } from '@googlemaps/map-loader'
import React from 'react';

const mapOptions = {
  zoom: 1
}

const apiOptions = {
  version: 'weekly',
}

const mapLoaderOptions = {
  apiKey: "AIzaSyC-xEY8-RgDdteff9etRy-SL4ehz5H6jbQ",
  divId: 'map',
  append: false,
  mapOptions: mapOptions,
  apiOptions: apiOptions
};

const mapLoader = new GoogleMap()

const initMap = () => {
  mapLoader.initMap(mapLoaderOptions)
  .then(googleMap => {

    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    directionsRenderer.setMap(googleMap)
    directionsRenderer.setPanel(document.getElementById('directionsPanel'))

    calculateAndDisplayRoute(directionsService, directionsRenderer)

  })
}

const calculateAndDisplayRoute = (directionsService, directionsRenderer) => {

  const request = {
      origin: { placeId: 'ChIJW-qHMHOc4jARHdzY5oFpy-c' },
      destination: { placeId: 'ChIJ4VX0ws-e4jARBGaQ2IACrcQ' },
      travelMode: google.maps.TravelMode.DRIVING,
  }
  
  directionsService.route(request, (result, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(result);
      }
  })
}


class Map extends React.Component {
  
    render() {

      initMap()

      return (
        <div className="container">
          <div id="map" style={{width: "70%", height: 1100, float:"right"}}></div>
          <div id="directionsPanel" style={{width: "30%", height: 1100, float:"left"}}></div>
        </div>
      );
    }
}

export default Map;