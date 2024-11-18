const express = require('express');
const { loginpage, resiterpage, Resiterusers, loginuseres, dashbord } = require('../controller/controller');


const routes = express.Router(); 

routes.get('/', loginpage);
routes.get('/register',resiterpage); 
routes.get('/dash',dashbord); 
routes.post('/insert',Resiterusers)
routes.post('/login',loginuseres)

module.exports = routes;