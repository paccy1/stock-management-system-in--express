const express = require('express');
const allRoutes = express.Routes();

const stockRoutes = require('./stock.routes');

allRoutes.use('/stock', stockRoutes);

module.exports = allRoutes;
