const express = require('express');

const routes = express.Router();

routes.use('/',require('../routes/authroutes'))
module.exports = routes;