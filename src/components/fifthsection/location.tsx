import React from "react";
import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet'

export const Location:React.FC<{location:[number,number],capital:string}>=(props)=>{

return(
    <div className="location">
            <MapContainer center={props.location} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={props.location}>
      <Popup>
        Food Order {props.capital} Branch
      </Popup>
    </Marker>
  </MapContainer>
    </div>
)
}