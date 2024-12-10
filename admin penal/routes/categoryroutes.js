const express=require('express')

const routes=express.Router()

const { AddCategorypage, addCategory,ViewCategorypage } = require('../controller/categorycontroller')

routes.get('/',AddCategorypage)
routes.post('/addCategory',addCategory)
routes.get('/view',ViewCategorypage)

module.exports=routes