const express=require('express')
const { adddata } = require('../controller/apicontroller')

const routes=express.Router()

routes.post('/users',adddata) 
module.exports=routes