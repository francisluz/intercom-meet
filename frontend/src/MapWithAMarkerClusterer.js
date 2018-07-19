import React from 'react';
import { compose, withProps, withHandlers, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

const MapWithAMarkerClusterer = compose(
    withStateHandlers(() => ({
      isOpen: false,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWbeeM5-tzXd3r53x2h2swWdTUibNrzxU&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
      onMarkerClustererClick: () => (markerClusterer) => {
        const clickedMarkers = markerClusterer.getMarkers()
        console.log(`Current clicked markers length: ${clickedMarkers.length}`)
        console.log(clickedMarkers)
      },
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: 53.339428, lng: -6.257664 }}
    >
      <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {props.markers.map(marker => (
          <Marker
            key={marker.user_id}
            position={{ lat: Number(marker.latitude), lng: Number(marker.longitude) }}
            // onClick={ props.onToggleOpen }
          >
            <InfoWindow
                   key={ `${marker.user_id}_info` }
                  //  content={ marker.name } 
                  //  onCloseClick={ props.onToggleOpen } 
                  ><span>{ marker.user_id +' - '+ marker.name }</span></InfoWindow>
            
          </Marker>
        ))}
      </MarkerClusterer>
    </GoogleMap>
  );

export default MapWithAMarkerClusterer