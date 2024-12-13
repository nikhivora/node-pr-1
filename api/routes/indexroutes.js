const express=require('express')

const routes=express.Router()

routes.get('/',require('./apiroutes'))
module.exports=routes