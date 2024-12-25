const express=require('express')

const routes=express.Router()

const { admin, verifyToken } = require('../Midalware/Auth')
const { allPost } = require('../controller/admincotroller')

routes.get('/allpost',verifyToken,admin,allPost)

module.exports=routes