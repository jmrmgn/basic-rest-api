const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// application/json parser
app.use(bodyParser.json());

// Routes
app.use('/feed', feedRoutes);


app.listen(8080);