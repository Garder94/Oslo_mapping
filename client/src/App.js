import React, { Component } from 'react';

import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

import {
  Map,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  LayerGroup,
  Circle
} from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import '../node_modules/tilelayer-kartverket';
import Header from './components/Header';
import Dataset from './components/Dataset';
import Air from './components/Air';
import BySykkelStasjoner from './components/Bysykkel/BySykkelStasjoner';
import L from 'leaflet';
import CanvasLayer from 'react-leaflet-canvas-layer';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const position = [59.91, 10.8];
const position2 = [59.915, 10.79];
var pointList = [position, position2];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <div style={{ background: '#094969', height: '1px' }} />
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div className="item carousel-item ">
                <Dataset />
              </div>
              <div className="item carousel-item">
                <Air />
              </div>

              <div className="item carousel-item active">
                <BySykkelStasjoner />
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
