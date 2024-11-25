const passport=require('passport')


const paaportlocal=require('passport-local').Strategy

const usermodels=require('../models/usermodels')


passport.use(new paaportlocal({
    usernameField:'email'
}, async (email,password,done)=>{
    console.log(email);
    
}))
module.exports=passport