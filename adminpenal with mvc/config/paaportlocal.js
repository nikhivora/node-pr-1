const passport=require('passport')


const paaportlocal=require('passport-local').Strategy

const usermodels=require('../models/usermodels')


passport.use(new paaportlocal({
    usernameField: 'email',
}, async (email, password, done) => {
    try {

        let user = await usermodels.findOne({ email: email });
     
        
        if (!user || user.password != password) {
            console.log("Email and Password not valid");
            return done(null, false)
        }
        return done(null, user);
    } catch (err) {
        console.log(err);
        return done(null, false);
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await usermodels.findById(id);
      
        
        return done(null, user)
    } catch (err) {
        return done(null, false);
    }
})

passport.checkUser = (req, res, next) => {
    
    if (!req.isAuthenticated()) {
        return res.redirect('/')
    }
    return next();
}
passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.users = req.user
    }
    return next();
}



module.exports=passport