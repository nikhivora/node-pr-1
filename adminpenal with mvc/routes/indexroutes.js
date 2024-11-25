const express=require('express')
const { registerpage, registerusers, loginpage, dashpage, loginusers } = require('../controller/authcontroller')

const routes=express.Router()

const passport=require('passport')

routes.get('/',loginpage)
routes.get('/res',registerpage)
routes.get('/dash',passport.checkUser,dashpage)
routes.post('/insert', registerusers)
routes.post('/loginusers',passport.authenticate('local',{failureRedirect:'/'}),loginusers)


module.exports=routes