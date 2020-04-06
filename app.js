const express = require('express');
const path = require('path');
const accountRoutes = require('./routes/account');

const app = express();

// Middleware for sending JSON
app.use(express.json());

// Serving Static Files
app.use(express.static(path.join(__dirname + '/public')));

app.use('/api/v1/accounts', accountRoutes);

module.exports = app;
