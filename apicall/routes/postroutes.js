const express=require("express")
const { addpost } = require("../controller/postcontroller")
const { verifyToken } = require("../Midalware/Auth")

const routes=express.Router()

const multer = require('multer');
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

routes.post('/addpost',verifyToken,upload,addpost)

module.exports= routes
