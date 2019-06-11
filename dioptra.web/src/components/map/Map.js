import React from 'react'
import {
  Map as LeafletMap,
  TileLayer as LeafletTileLayer,
  Marker as LeafletMarker
} from 'react-leaflet'
import leaflet from 'leaflet'
import './map.css'
import { MAP_CENTER, TILE_LAYERS } from './mapUtilities'

const Map = () => {
  return (
    <LeafletMap center={MAP_CENTER} zoom={7} className="map">
      <LeafletTileLayer url={TILE_LAYERS.LIGHT} />    
    </LeafletMap>
  )
}

export default Map
