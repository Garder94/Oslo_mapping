var fs = require('fs');
const express = require('express');
const router = express.Router();
var contents = fs.readFileSync('./dataset/myjsonfile.json', 'utf8');
var jsonContent = JSON.parse(contents);
var year_table = [];
var oslo_table = [];
var old_oslo_table = [];
var lokka_oslo_table = [];
var sagene_oslo_table = [];
var haugen_oslo_table = [];
var frogner_oslo_table = [];
var ullern_oslo_table = [];
var va_oslo_table = [];
var na_oslo_table = [];
var bjerke_oslo_table = [];
var grorud_oslo_table = [];
var stovner_oslo_table = [];
var alna_oslo_table = [];
var ostensjo_oslo_table = [];
var nordstrand_oslo_table = [];
var s_nordstrand_oslo_table = [];
var sentrum_oslo_table = [];
var marka_oslo_table = [];
var no_adress_oslo_table = [];

//Henter ut årene:
for (var key in jsonContent.table[0][0]) {
  year_table.push(jsonContent.table[0][0][key]);
}

var count = Object.keys(jsonContent.table[0][0]).length;

//Oslo i Alt:
for (var key in jsonContent.table[0][2]) {
  oslo_table.push(jsonContent.table[0][2][key]);
}

//Bydel Gamle Oslo

for (var key in jsonContent.table[0][3]) {
  old_oslo_table.push(jsonContent.table[0][3][key]);
}

for (var key in jsonContent.table[0][4]) {
  lokka_oslo_table.push(jsonContent.table[0][4][key]);
}

for (var key in jsonContent.table[0][5]) {
  sagene_oslo_table.push(jsonContent.table[0][5][key]);
}

for (var key in jsonContent.table[0][6]) {
  haugen_oslo_table.push(jsonContent.table[0][6][key]);
}

for (var key in jsonContent.table[0][7]) {
  frogner_oslo_table.push(jsonContent.table[0][7][key]);
}

for (var key in jsonContent.table[0][8]) {
  ullern_oslo_table.push(jsonContent.table[0][8][key]);
}

for (var key in jsonContent.table[0][9]) {
  va_oslo_table.push(jsonContent.table[0][9][key]);
}

for (var key in jsonContent.table[0][10]) {
  na_oslo_table.push(jsonContent.table[0][10][key]);
}

for (var key in jsonContent.table[0][11]) {
  bjerke_oslo_table.push(jsonContent.table[0][11][key]);
}

for (var key in jsonContent.table[0][12]) {
  grorud_oslo_table.push(jsonContent.table[0][12][key]);
}

for (var key in jsonContent.table[0][13]) {
  stovner_oslo_table.push(jsonContent.table[0][13][key]);
}

for (var key in jsonContent.table[0][14]) {
  alna_oslo_table.push(jsonContent.table[0][14][key]);
}

for (var key in jsonContent.table[0][15]) {
  ostensjo_oslo_table.push(jsonContent.table[0][15][key]);
}

for (var key in jsonContent.table[0][16]) {
  nordstrand_oslo_table.push(jsonContent.table[0][16][key]);
}

for (var key in jsonContent.table[0][17]) {
  s_nordstrand_oslo_table.push(jsonContent.table[0][17][key]);
}

for (var key in jsonContent.table[0][18]) {
  sentrum_oslo_table.push(jsonContent.table[0][18][key]);
}

for (var key in jsonContent.table[0][19]) {
  marka_oslo_table.push(jsonContent.table[0][19][key]);
}

for (var key in jsonContent.table[0][20]) {
  no_adress_oslo_table.push(jsonContent.table[0][20][key]);
}

// @route   GET api/users/test
// @desc    Test users route
// @access  Public
router.get('/:test', (req, res) => {
  console.log(req.params.test);
  var index = year_table.indexOf(req.params.test);
  console.log();
  var table = [oslo_table[index], old_oslo_table[index]];

  res.json({ msg: table });
});

module.exports = router;
