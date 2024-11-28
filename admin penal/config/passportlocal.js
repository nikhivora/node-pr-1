// const passport = require('passport')


// const passportlocal = require("passport-local").Strategy

// const usermodels = require('../models/usermodels')

// passport.use(new passportlocal({
//     usernameField: 'email',
// }, async (email, password, done) => {
//     try {

//         let user = await usermodels.findOne({ email: email });
     
        
//         if (!user || user.password != password) {
//             console.log("Email and Password not valid");
//             return done(null, false)
//         }
//         return done(null, user);
//     } catch (err) {
//         console.log(err);
//         return done(null, false);
//     }
// }))

// passport.serializeUser((user, done) => {
//     return done(null, user._id);
// })

// passport.deserializeUser(async (id, done) => {
//     try {
//         const user = await usermodels.findById(id);
      
        
//         return done(null, user)
//     } catch (err) {
//         return done(null, false);
//     }
// })

// passport.checkUser = (req, res, next) => {
    

//     console.log(req.isAuthenticated());
    
//     if (!req.isAuthenticated()) {
//         return res.redirect('/')
//     }
//     return next();
// }
// module.exports = passport