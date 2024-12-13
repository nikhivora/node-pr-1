const express=require('express')
const routes = express.Router()

routes.use('/',require('../routes/authroutes'))
routes.use('/category',require('../routes/categoryroutes'))

module.exports=routes