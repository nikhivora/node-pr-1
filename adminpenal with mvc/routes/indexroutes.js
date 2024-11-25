const express=require('express')
const { registerpage, registerusers, loginpage, dashpage, loginusers } = require('../controller/authcontroller')

const routes=express.Router()

const passport=require('passport')

routes.get('/',loginpage)
routes.get('/res',registerpage)
routes.get('/dash',dashpage)
routes.post('/insert', registerusers)
routes.get('/loginusers',passport.authenticate('local',{failureRedirect:'/'}),loginusers)


module.exports=routes