import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Map, TileLayer, Popup, LayerGroup, Circle } from 'react-leaflet';

import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

let name = [];
var positions = [];
const color = [
  'rgba(255,99,132,0.6)',
  'rgba(54,162,235,0.6)',
  'rgba(255,206,86,0.6)',
  'rgba(75,192,192,0.6)',
  'rgba(153,102,255,0.6)',
  'rgba(255, 204, 255,0.6)',
  'rgba(153, 51, 51,0.6)',
  'rgba(102, 102, 153,0.6)',
  'rgba(0, 51, 102,0.6)',
  'rgba(255, 102, 0,0.6)',
  'rgba(204, 153, 0,0.6)',
  'rgba(204, 153, 0,0.6)'
];
export class Air extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      air: {}
    };
  }
  mapRef = React.createRef();
  componentDidMount() {
    this.interval = setInterval(() => {
      var comp;
      var unit;

      fetch('http://localhost:5000/api/air/air')
        .then(results => {
          return results.json();
        })
        .then(res => {
          name = [];
          let values = [];
          positions = [];
          res.msg.forEach(element => {
            name.push(element.station);
            comp = element.component;
            unit = element.unit;

            positions.push([element.latitude, element.longitude]);
            values.push(element.value);
          });

          this.setState({
            air: {
              labels: name,
              datasets: [
                {
                  label: `${comp} - ${unit}`,
                  backgroundColor: color,
                  data: values
                }
              ]
            }
          });
        });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    this.mapRef.current.leafletElement.invalidateSize();
  }

  render() {
    //    const position = ;

    return (
      <div>
        {positions.length > 0 ? (
          <div className="row" style={{ backgroundColor: '#d9d9d9' }}>
            <div className="col-6">
              <div className="chart" style={{ backgroundColor: '#d9d9d9' }}>
                {' '}
                <Bar
                  data={this.state.air}
                  options={{ maintainAspectRatio: false }}
                  height="100%"
                />
              </div>
            </div>
            <div className="col-6">
              <Map
                center={[59.91, 10.8]}
                zoom={11}
                doubleClickZoom={false}
                closePopupOnClick={false}
                dragging={false}
                zoomSnap={false}
                zoomDelta={false}
                trackResize={false}
                touchZoom={false}
                scrollWheelZoom={false}
                style={{ height: '500px', width: '600px' }}
                ref={this.mapRef}
              >
                <TileLayer url="http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart_graatone&zoom={z}&x={x}&y={y}" />
                <LayerGroup>
                  {positions.map((pos, index) => (
                    <Circle center={pos} color={color[index]} radius={200}>
                      <Popup>{name[index]}</Popup>
                    </Circle>
                  ))}
                </LayerGroup>
              </Map>
            </div>
          </div>
        ) : (
          <div>
            <Map
              center={[59.91, 10.8]}
              zoom={11}
              doubleClickZoom={false}
              closePopupOnClick={false}
              dragging={false}
              zoomSnap={false}
              zoomDelta={false}
              trackResize={false}
              touchZoom={false}
              scrollWheelZoom={false}
              style={{ height: '500px' }}
              ref={this.mapRef}
            >
              <TileLayer url="http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart_graatone&zoom={z}&x={x}&y={y}" />
            </Map>
          </div>
        )}
      </div>
    );
  }
}

export default Air;
