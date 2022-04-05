const express = require('express');
const cors = require('cors');

const { routes: userRoutes } = require('./user/routes');

// express execution
const app = express();

// using middlewares
app.use(cors());
app.use(express.json());

// enabling routes
app.use('/user', userRoutes);

module.exports = app;
