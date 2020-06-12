const passport=require('passport');
const User=require('../models/')
const LocalStrategy=require('passport-local').Strategy;


//authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email' 
    },
    function(email,password,done)
    {


    }
))

