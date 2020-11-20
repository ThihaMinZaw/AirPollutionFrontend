import GoogleMapReact from 'google-map-react'

import './map.scss'

import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import map_styles from './map_styles.js'

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

const Map = ({ location, zoomLevel }) => {
    return <div className="map">
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBqmKwwWgwsdbNeQVaWdsMvo5zv2IwfakI' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={{ map_styles }}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
}

export default Map;