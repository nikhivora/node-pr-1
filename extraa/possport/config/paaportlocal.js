const passport=require('passport')

const passportlocal=require('passport-local').Strategy

const usermodels=require('../models/usermodels')

passport.use(new passportlocal({
    usernameField:'email'
},async(email,password,done)=>{
try {
    let users = await usermodels.findOne({email:email})

if (!users || users.password!== password) {
    console.log("emai and pasword is worng");
    done(null,false)
}
    return done(null,users)
} catch (error) {
    console.log(error);
}
}))


module.exports=passport