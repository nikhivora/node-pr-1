const express=require('express')
const {  login, resigiter, registeruser, dashboardpage, loginuser, forgotpassword, otppage, otp, newpass, newpasspage } = require('../controller/controller')

const passport=require('passport')
const routes=express.Router()

routes.get('/',login)
routes.get('/resigiter',resigiter)
routes.post('/registeruser',registeruser)
routes.post('/loginuser',passport.authenticate('local',{failureRedirect:'/'}),loginuser)
routes.get('/dashboard', passport.checkUser,dashboardpage)
routes.post('/forgotpassword',forgotpassword)
routes.get('/otp',otppage)
routes.post('/otp',otp)
routes.get('/newpass',newpasspage)
routes.post('/newpass',newpass)

module.exports=routes