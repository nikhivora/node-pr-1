const express=require('express')


const routes=express.Router()

const { verifytoken } = require('../Midalware/auth')
const { addpost } = require('../controller/poatcontroller')

routes.post('/addpost',verifytoken,addpost)


module.exports=routes