import React from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../utils";
import "./Map.css";
function Map({ countries, casesType, position, zoom }) {
  console.log(position);
  return (
    <div className="map">
      <LeafletMap center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
        {/* loop through countries and draw circles on screen */}
      </LeafletMap>
    </div>
  );
}

export default Map;
