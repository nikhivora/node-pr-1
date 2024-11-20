const express=require('express')
 
const port=8000

const app=express()

app.set('view engine','ejs')


const passport=require('passport')

constdb=require('./config/db')

const passportlocal=require('./config/passportlocal')

const session=require('express-session')
app.use(session({
    secret:'nikhil',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24
    }
}))
app.use(passport.session())
app.use(passport.initialize())



app.use('/',require('./routes/indexroutes'))

app .use(express.urlencoded())


app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log('server is runing',port);
})