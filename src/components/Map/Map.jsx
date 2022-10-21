import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import './Map.css';

export default function Map({ event }) {
  const [geoCode, setGeoCode] = useState({});
  const center = useMemo(() => geoCode, [geoCode]);

  const addToGeoCode = useCallback(async () => {
    try {
      const parameter = {
        address: event.location,
      };
      const addObj = await getGeocode(parameter);
      const { lat, lng } = getLatLng(addObj[0]);
      setGeoCode({ lat, lng });
    } catch (err) {
      setGeoCode({ lat: 34.05746358383927, lng: -118.26135714945593 });
      console.log(err, '<< err: addToGeoCode()');
    }
  }, [event.location]);

  useEffect(() => {
    addToGeoCode();
  }, [addToGeoCode]);

  const GMAP_KEY = process.env.REACT_APP_GMAP_KEY;

  return (
    <LoadScript googleMapsApiKey={GMAP_KEY}>
      <GoogleMap
        mapContainerClassName="container-gmap"
        center={center}
        zoom={15}
      >
        <Marker position={center}></Marker>
      </GoogleMap>
    </LoadScript>
  );
}
