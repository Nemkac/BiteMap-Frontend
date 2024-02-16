import React, { useEffect, useState } from 'react';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type Props = {}

const Map = (props: Props) => {

    const [Latitude, setLatitude] = useState(Number);
    const [Longitude, setLongitude] = useState(Number);

    const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow, 
        iconSize: [25,41], 
        iconAnchor: [12,41]
    });

    useEffect(() => { 
        setLatitude(45.267136);
        setLongitude(19.833549);
    });

    return (
        <div className="w-[400px] h-[400px]">
            <MapContainer center={[Latitude, Longitude]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[Latitude,Longitude]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map