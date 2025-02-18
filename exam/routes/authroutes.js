const express=require('express')
const { loginpage, respage, inserstrecord, loginusers, dashbordpage, prodactadd, addproduact, deleteproduct, editproduct, updatepro, addtocart, AddtoCrat, viewtocart, deletecart } = require('../controller/authcontroller')

const routes=express.Router()
const passport=require('passport')


const multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage }).single('image')

routes.get('/',loginpage)
routes.get('/res',respage)
routes.post('/insart',inserstrecord)
routes.post('/loginusers',passport.authenticate('local',{failureRedirect:'/'}),loginusers)
routes.get('/dash',passport.checkUser,dashbordpage)
routes.get('/prodactadd',passport.checkUser,prodactadd)
routes.post('/addproduact',upload,addproduact)
routes.get('/delete',deleteproduct)
routes.get('/edit',editproduct)
routes.post('/up',upload,updatepro)
routes.get('/addtocart',AddtoCrat)
routes.get('/viewtocart',viewtocart)
routes.get('/deletecart',deletecart)




module.exports=routes