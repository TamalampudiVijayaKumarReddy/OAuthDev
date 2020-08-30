var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var keys =require('./keys');
var User = require('../models/user-model');

passport.use(
	new GoogleStrategy({
		callbackURL:'http://localhost:3000/auth/google/callback',
		clientID:keys.google.clientID,
		clientSecret:keys.google.clientSecret

	},function(accessToken,refreshToken,profile,done){

		User.findOne({googleId:profile.id},function(err,currentUser){
			if(err){
				console.log(err);
			}else{
				if(currentUser){
					console.log('user is' +currentUser);
					done(null,currentUser);
				}else{
					new User({
						username:profile.displayName,
						googleId:profile.id
					}).save(function(err,createdUser){
						console.log('new user' +createdUser);
					});

				}
			}
		})


		

	})



);