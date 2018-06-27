const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost/ToDos';

require('dotenv').config();
const port = 3000;
const routes = require('./routes');

const app = express();

// mongoose.connect(process.env.MONGODB_LOCAL);
mongoose.connect(MONGODB_URI);

app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);


app.listen(port, () => {
    console.log(`app listening on port: ${port}`);
});
