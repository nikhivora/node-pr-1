const express=require('express')

const routes=express.Router()

routes.use('/',require('./apiroutes'))
module.exports=routes