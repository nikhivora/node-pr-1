const passport=require('passport')

const passportlocal=require('passport-local').Strategy

const usermodels=require('../models/usermodels')
const user = require('../models/usermodels')

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

passport.serializeUser((users,done)=>{

    console.log(users._id);
    
    return done(null,users._id)
})
passport.deserializeUser(async (id,done)=>{
    try {
        let users=await usermodels.findById(id)

      return done(null,users)
        
    } catch (error) {
return done(null,false)
            
    }
})

passport.checkuser=(req ,res, next)=>{
console.log(req.isAuthenticated());

}


module.exports=passport