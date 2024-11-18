const express=require('express')

const port=8000

const app=express()

app.use(express.urlencoded())

app.set('view engine', 'ejs')

app.use('/',require('./routes/indexroutes'))

const db = require('./config/db')

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("server is runing");
})