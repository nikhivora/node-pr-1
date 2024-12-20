const express=require('express')

const routes=express.Router()

routes.use('/', require('./authroutes'));
routes.use('/user', require('./apiroutes'));
routes.use('/post', require('./postroutes'));

module.exports=routes