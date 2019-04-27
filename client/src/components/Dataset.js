import React, { Component } from 'react';
import { Map, TileLayer, Polyline, LayersControl } from 'react-leaflet';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import nordreAker from '../bydeler/nordreAker';
import sagene from '../bydeler/sagene';
import nordstrand from '../bydeler/nordstrand';
import haugen from '../bydeler/haugen';
import ullern from '../bydeler/ullern';
import ostensjo from '../bydeler/ostensjo';
import stovner from '../bydeler/stovner';
import sondreNordstrand from '../bydeler/sondreNordstrand';
import alna from '../bydeler/alna';
import vestreAker from '../bydeler/vestreAker';
import bjerke from '../bydeler/bjerke';
import frogner from '../bydeler/frogner';
import grorud from '../bydeler/grorud';
import gamleOslo from '../bydeler/gamleOslo';
import lokka from '../bydeler/lokka';

const { BaseLayer, Overlay } = LayersControl;
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

class Dataset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      value: [],
      air: []
    };
    this.getYear = this.getYear.bind(this);
  }
  mapRef = React.createRef();

  componentDidMount() {
    this.getYear('2018');
  }

  getYear(e) {
    console.log(e);

    fetch('http://localhost:5000/api/dataset/' + e)
      .then(results => {
        return results.json();
      })
      .then(data => {
        //console.log(data.msg[0]);
        /*for (let i = 0; i < data.msg.length; i++) {
          this.state.value.push(data.msg[i]);
        }*/
        this.setState({ value: data.msg });
      });
  }

  componentDidUpdate() {
    this.mapRef.current.leafletElement.invalidateSize();
  }
  render() {
    var value = 5;
    return (
      <div style={{ height: '25vh' }}>
        <Map
          center={[59.85, 10.8]}
          zoom={11}
          doubleClickZoom={false}
          closePopupOnClick={false}
          dragging={false}
          zoomSnap={false}
          zoomDelta={false}
          trackResize={false}
          touchZoom={false}
          scrollWheelZoom={false}
          ref={this.mapRef}
        >
          <TileLayer url="http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart_graatone&zoom={z}&x={x}&y={y}" />

          <div className=" leaflet-top leaflet-right">
            <div className="container">
              <div className="row">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => this.getYear(2009)}
                >
                  2009
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => this.getYear(2010)}
                >
                  2010
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => this.getYear(2011)}
                >
                  2011
                </button>
                <button
                  type="button"
                  className="btn btn-info first"
                  onClick={() => this.getYear(2019)}
                >
                  2019
                </button>
              </div>
            </div>
          </div>
          <Polyline
            color="#3388ff"
            positions={nordreAker_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[7] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={sagene_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[3] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={nordstrand_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[13] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={haugen_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[4] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={ullern_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[6] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={ostensjo_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[12] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={stovner_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[10] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={sondreNordstrand_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[14] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={grorud_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[9] / this.state.value[0]) * value
                : 0
            }
          />

          <Polyline
            color="#3388ff"
            positions={gamleOslo_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[1] / this.state.value[0]) * value
                : 0
            }
          />

          <Polyline
            color="#3388ff"
            positions={lokka_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[2] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={bjerke_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[8] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={frogner_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[5] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={vestreAker_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[7] / this.state.value[0]) * value
                : 0
            }
          />
          <Polyline
            color="#3388ff"
            positions={alna_poly}
            fill={true}
            fillColor="red"
            fillOpacity={
              this.state.value.length > 0
                ? (this.state.value[11] / this.state.value[0]) * value
                : 0
            }
          />
        </Map>
      </div>
    );
  }
}

export default Dataset;
