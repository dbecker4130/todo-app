const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT;
const routes = require('./routes');

const app = express();

// mongoose.connect(process.env.MONGODB_LOCAL);
mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`app listening on port: ${port}`);
});
