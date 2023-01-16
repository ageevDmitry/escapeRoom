import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import './map.css';
import L from 'leaflet';
import {UrlMapMarket, CONTACTS} from '../../const';

const markerIcon = L.icon ({
  iconUrl: UrlMapMarket.Default,
});

function Map (): JSX.Element {
  return (
    <div className="map">
      <div className="map__container">
        <MapContainer center={[CONTACTS.lat, CONTACTS.lng]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon= {markerIcon} position={[CONTACTS.lat, CONTACTS.lng]}>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
