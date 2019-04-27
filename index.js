const express = require('express');
const bodyParser = require('body-parser');
const data = require('./routes/api/dataset');
const air = require('./routes/api/air');

const app = express();

app.use(express.static('public'));
const cors = require('cors');

//TODO : whitelist for cors
app.use(cors());
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/dataset', data);
app.use('/api/air', air);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
