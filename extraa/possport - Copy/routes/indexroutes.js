const express=require('express')
const { registerpage, registerusers, loginpage } = require('../controller/authcontroller')

const routes=express.Router()

routes.get('/',registerpage)
routes.get('/login',loginpage)

routes.post('/insert',registerusers)

module.exports=routes