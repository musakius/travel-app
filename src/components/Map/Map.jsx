import React from 'react';
import PropTypes from 'prop-types';
import './css/map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import TranslatableText from '../TranslatableText/TranslatableText';


const Map = ({coordinates}) => {
  const position = coordinates;
 
  function mapChangeSize() {
    const mapWrapper = document.querySelector('.map-wrapper');
    const map = document.querySelector('.leaflet-container');
    const button = document.querySelector('.map-button');
    
    mapWrapper.classList.toggle('full-size');
    map.classList.toggle('full-size');
    button.classList.toggle('map-button--full-size');    
  }
  
  
  return (
  <>
    <div className="card mb-3 map-wrapper">
    <h4 className="card-header">
        <TranslatableText
                dictionary={{
                    russian: 'Карта',
                    belarusian: 'Карта',
                    english: 'Map'
                }}
        />
        </h4> 
      <button className="map-button" onClick={mapChangeSize}></button>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
      <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    
  </>
)  
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number)
}

export default Map;