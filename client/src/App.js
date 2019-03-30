import React, { Component } from 'react';

import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import '../node_modules/tilelayer-kartverket';
import Dataset from './components/Dataset';
import nordreAker from './bydeler/nordreAker';
import sagene from './bydeler/sagene';
import nordstrand from './bydeler/nordstrand';
import haugen from './bydeler/haugen';
import ullern from './bydeler/ullern';
import ostensjo from './bydeler/ostensjo';
import stovner from './bydeler/stovner';
import sondreNordstrand from './bydeler/sondreNordstrand';
import alna from './bydeler/alna';
import vestreAker from './bydeler/vestreAker';
import bjerke from './bydeler/bjerke';
import frogner from './bydeler/frogner';
import grorud from './bydeler/grorud';
import gamleOslo from './bydeler/gamleOslo';
import lokka from './bydeler/lokka';
import L from 'leaflet';

const bjerke_poly = bjerke();
const sagene_poly = sagene();
const nordstrand_poly = nordstrand();
const haugen_poly = haugen();
const ullern_poly = ullern();
const ostensjo_poly = ostensjo();
const stovner_poly = stovner();
const sondreNordstrand_poly = sondreNordstrand();

const grorud_poly = grorud();
const gamleOslo_poly = gamleOslo();
const lokka_poly = lokka();
const frogner_poly = frogner();
const nordreAker_poly = nordreAker();
const vestreAker_poly = vestreAker();
const alna_poly = alna();

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const position = [59.91, 10.75];

class App extends Component {
  render() {
    return (
      <div>
        <Dataset />
        <Map center={position} zoom={11}>
          <TileLayer url="http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=matrikkel_bakgrunn&zoom={z}&x={x}&y={y}" />
          <Polyline
            color="#3388ff"
            positions={nordreAker_poly}
            fill={true}
            fillOpacity={0.8}
          />
          <Polyline color="#3388ff" positions={sagene_poly} />
          <Polyline color="#3388ff" positions={nordstrand_poly} />
          <Polyline color="#3388ff" positions={haugen_poly} />
          <Polyline color="#3388ff" positions={ullern_poly} />
          <Polyline color="#3388ff" positions={ostensjo_poly} />
          <Polyline color="#3388ff" positions={stovner_poly} />
          <Polyline color="#3388ff" positions={sondreNordstrand_poly} />
          <Polyline color="#3388ff" positions={grorud_poly} />
          <Polyline color="#3388ff" positions={gamleOslo_poly} />
          <Polyline color="#3388ff" positions={lokka_poly} />
          <Polyline color="#3388ff" positions={bjerke_poly} />
          <Polyline color="#3388ff" positions={frogner_poly} />
          <Polyline color="#3388ff" positions={vestreAker_poly} />
          <Polyline color="#3388ff" positions={alna_poly} />
        </Map>
      </div>
    );
  }
}

export default App;
