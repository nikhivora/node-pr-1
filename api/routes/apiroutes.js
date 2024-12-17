const express=require('express')
const { adddata, viewuser } = require('../controller/apicontroller')

const routes=express.Router()

routes.post('/addusers',adddata) 
routes.get('/viewusers',viewuser) 

module.exports=routes