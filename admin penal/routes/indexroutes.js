const express=require('express')
const {  login, resigiter, registeruser, dashboardpage, loginuser } = require('../controller/controller')

const passport=require('passport')
const routes=express.Router()

routes.get('/',login)
routes.get('/resigiter',resigiter)
routes.get('/dashboard',dashboardpage)
routes.post('/registeruser',registeruser)
routes.post('/loginuser',passport.authenticate('local',{failureRedirect:'/'}),loginuser)

module.exports=routes