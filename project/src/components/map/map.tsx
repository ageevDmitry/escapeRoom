import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import './map.css';
import L from 'leaflet';
import {UrlMapMarket} from '../../const';

L.Icon.Default.imagePath = UrlMapMarket.Default;

function Map (): JSX.Element {
  return (
    <div className="map">
      <div className="map__container">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
