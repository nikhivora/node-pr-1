const express=require('express')

const routes=express.Router()

routes.use('/',require('./authroutes'))
routes.use('/login',require('./loginroutes'))
routes.use('/post',require('./postroutes'))

module.exports=routes