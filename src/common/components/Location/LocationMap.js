import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const apiKey = `AIzaSyB9fW7cIm3FfJzJ8ozLGc1gp0xnDtICNi8`
const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`

const LocationMap = props => {
  return (
    <GoogleMap
      defaultZoom={props.defaultZoom}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      {props.isMarkerShown &&
        <Marker position={{ lat: props.lat, lng: props.lng }} />
      }
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(LocationMap))
