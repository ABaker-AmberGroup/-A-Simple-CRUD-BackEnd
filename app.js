// ---------------
// Based Veriables
// ---------------
const express = require('express');
const cors = require('cors');
const app = express();
// ---------------


// ---------------
// Router
// ---------------
const itemsRouter = require('./routes/items.routes.js');
// ---------------


// ---------------
// Middleware
// ---------------
app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// ---------------


// ---------------
// Routes
// ---------------
app.use('/api/v1/items', itemsRouter);
// ---------------


// ---------------
// Export Module
// ---------------
module.exports = app;
// ---------------



