import React from 'react'
import LocationMap from './LocationMap'
import styles from './styles.css'

const apiKey = `AIzaSyB9fW7cIm3FfJzJ8ozLGc1gp0xnDtICNi8`
const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`

export default props => {
  return (
    <section className={styles.location}>
      <section className={styles.info}>
        <h3>{props.name}</h3>
        <p>{props.address}</p>
        <p>{`${props.city}, ${props.province}`}</p>
        <p>{props.postalCode}</p>
      </section>
      <section className={styles.gMap}>
        <LocationMap isMarkerShown={true}
          lat={props.lat}
          lng={props.lng}
          defaultZoom={15}
          loadingElement={<div style={{height: '100%'}} />}
          containerElement={<div style={{height: '400px'}} />}
          mapElement={<div style={{height: '100%'}} />}
          googleMapURL={googleMapURL}
          />
      </section>
    </section>
  )
}
