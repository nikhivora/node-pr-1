const express=require('express')

const routes=express.Router()

routes.use('/user',require('./apiroutes'))

module.exports=routes