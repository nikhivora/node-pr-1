const express=require('express')

const routes=express.Router()

routes.use('/',require('./authroutes'))
routes.use('/user',require('./apiroutes'))

module.exports=routes