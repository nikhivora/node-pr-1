const express=require('express')
const { adddata, viewuser, deleteusers, updateusers } = require('../controller/apicontroller')

const routes=express.Router()

routes.post('/addusers',adddata) 
routes.get('/viewusers',viewuser) 
routes.delete('/deleteusers',deleteusers) 
routes.put('/updateusers',updateusers) 

module.exports=routes