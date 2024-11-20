const express=require('express')
 
const port=8000

const app=express()

app.set('view engine','ejs')

app .use(express.urlencoded())

const passport=require('passport')

const passportlocal=require('./config/paaportlocal')

const session=require('express-session')

app.use('/',require('./routes/indexroutes'))

constdb=require('./config/db')

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log('server is runing',port);
})