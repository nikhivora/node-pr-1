const express=require('express')

const port=8000

const app=express()

app.set('view engine', 'ejs')

const path=require('path')

const db=require('./config/db')

app.use(express.urlencoded())

app.use('/',require('./routes/indexroutes'))

app.use('/',express.static(path.join(__dirname,'public')));


const passport=require('passport')

const passportlocal=require('./config/passportlocal')

const session=require('express-session')

app.use(session({
    secret: 'admin',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize())
app.use(passport.session())




app.listen(port,(err)=>{
    if (err) {
        
        console.log(err);
    
    }
    console.log("server id runing",port);
    
})