import React, { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import API_KEY from "../../../../API_KEY/API_KEYS.json";

const containerStyle = {
  width: "850px",
  height: "400px",
};

const center = {
  lat: 42.694341,
  lng: 23.318235,
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY.API_KEY.GoogleMaps.Key,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);
