const express=require('express')
const { resegiterusers, viewusers, deleteusers, updateusers } = require('../controller/authcontroller')

const routes=express.Router()

routes.post('/resegiter',resegiterusers)
routes.get('/viewusers',viewusers)
routes.delete('/deleteusers',deleteusers)
routes.put('/updateusers',updateusers)

module.exports=routes