var fs = require('fs');
const express = require('express');
const router = express.Router();
var { graphql, buildSchema } = require('graphql');

const fetch = require('node-fetch');

const root = {
  hello: () => JSON.parse(fs.readFileSync('./dataset/air.json', 'utf8'))
};

var data;
setInterval(() => {
  fetch(
    'https://api.nilu.no/aq/utd/59.89869/10.81495/10?method=within&components=no2'
  )
    .then(res => res.json())
    .then(json => {
      data = JSON.stringify(json);
      fs.writeFileSync('./dataset/air.json', data, err => {
        if (err) console.log(err);
      });
    });
}, 60000);

var schema = buildSchema(
  `type Query{      
    hello: [Data]
  }
  type Data{
    zone: String,
    area: String,
    station: String
    latitude: String,
    longitude: String,
    component: String,
    unit: String, 
    value:String
  }
  type Value{
    fromTime: String, 
    toTime: String, 
    value: String,
    qualityControlled: Boolean, 

  }`
);

var queryQuestion =
  '{ hello{station,latitude, longitude, value, component, unit}}';

router.get('/air', (req, res) => {
  graphql(schema, queryQuestion, root).then(response => {
    testign = response.data.hello;
    res.json({ msg: response.data.hello });
  });
});

module.exports = router;
