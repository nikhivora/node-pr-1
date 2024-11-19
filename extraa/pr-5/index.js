const express=require('express')

const port=9999

const app=express()

app.use(express.urlencoded())

app.set("view engine","ejs")

const db=require('./config/db')

app.use('/',require('./Routes/indexroutes'))

app.listen(port,(err)=>{
    if (err) {
        console.log(err);    
        return false
    }  
    console.log("server is runing",port);   
})