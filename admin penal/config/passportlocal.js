const passport = require('passport')


const passportlocal = require("passport-local").Strategy

const usermodels = require('../models/usermodels')

passport.use(new passportlocal({
    usernameField: "email"
}, async (email, password, done) => {


    try {
        const user = await usermodels.findOne({ email: email })
        if (!user || user.password !== password) {
            console.log("email and password is not match");
            return done(null, false)
        }

        return done(null, user)

    } catch (error) {
        console.log(error);

    }

}))

module.exports = passport