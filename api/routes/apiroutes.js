const express=require('express')
const { apicall } = require('../controller/apicontroller')

const routes=express.Router()

routes.get('/',apicall)
module.exports=routes