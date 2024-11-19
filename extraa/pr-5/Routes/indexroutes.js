const express=require('express')
const {addpage, adddata} = require('../controller/controller')

const routes=express.Router()

routes.get('/',addpage)
routes.post('/insert',adddata)

module.exports=routes