import React, { useState } from "react";
import Map, { NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./MapDemo.css";

function MapDemo() {
  const [viewport, setViewport] = useState({
    width: "50%",
    height: "100%",
    latitude: 47.5738,
    longitude: -52.73059,
    zoom: 12,
  });

  return (
    <div className="Map">
      <Map
        mapLib={maplibregl}
        initialViewState={viewport}
        style={{ width: "100%", height: " calc(100vh - 77px)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=z7Bpve5QYGkpIeKTSw6x"
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}

export default MapDemo;
