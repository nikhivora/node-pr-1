const express=require('express')
const { registerpage, registerusers, loginpage, loginuser, dashpage } = require('../controller/authcontroller')

const routes=express.Router()

const passport=require('passport')

routes.get('/',registerpage)
routes.get('/login',loginpage)
routes.post('/insert',registerusers)
routes.post('/loginusers',passport.authenticate('local',{failureRedirect:'/'}),  loginuser)

routes.get('/dash',dashpage)

module.exports=routes