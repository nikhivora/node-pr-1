const express=require('express')

const routes=express.Router()

const { AddCategorypage, addCategory,ViewCategorypage,deleteCategory } = require('../controller/categorycontroller')

routes.get('/',AddCategorypage)
routes.post('/addCategory',addCategory)
routes.get('/view',ViewCategorypage)
routes.get('/deleteCategory',deleteCategory)

module.exports=routes