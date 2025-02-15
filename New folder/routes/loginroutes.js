const express=require('express')

const routes=express.Router()

const { loginuser } = require('../controller/logincontroller')

routes.post('/loginuser',loginuser)

module.exports=routes