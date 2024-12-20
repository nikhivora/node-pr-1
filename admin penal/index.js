const express=require('express')

const port=8000

const app=express()

app.set('view engine', 'ejs')

const path=require('path')

const  cookieparser=require('cookie-parser')

app.use(cookieparser())

const db=require('./config/db')

const cors = require('cors');
app.use(cors());

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
app.use(passport.setUser);
app.use(express.urlencoded())
app.use('/',require('./routes/indexroutes'))


app.listen(port,(err)=>{
    if (err) {
        
        console.log(err);
    
    }
    console.log("server id runing",port);
    
})