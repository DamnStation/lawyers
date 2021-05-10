// { key: `AIzaSyAOIgMtAnr0mZKCyTXFvowSesUVtkui7po` }
// import React from "react";
// import GoogleMapReact from "google-map-react";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// function Map() {
//   const defaultProps = {
//     center: {
//       lat: 42.69437,
//       lng: 23.31828,
//     },
//     zoom: 18,
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "51vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: `AIzaSyAOIgMtAnr0mZKCyTXFvowSesUVtkui7po` }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         yesIWantToUseGoogleMapApiInternals={true}
//       >
//         <AnyReactComponent lat={42.69437} lng={23.31828} text="My Marker" />
//       </GoogleMapReact>
//     </div>
//   );
// }

// export default Map;
import React, { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

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
    googleMapsApiKey: "AIzaSyAOIgMtAnr0mZKCyTXFvowSesUVtkui7po",
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
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);
