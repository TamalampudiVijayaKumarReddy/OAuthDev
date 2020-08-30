var router = require('express').Router();
var passport = require('passport');

//auth login
router.get('/login',function(req,res){
	res.render('login');
});


//auth logout
router.get('/logout',function(req,res){
	//hangle with passport
	res.send('logging out')
});

//auth with google
router.get('/google',passport.authenticate('google',{
	 scope:['profile']
}));

//callback route for google to redirect to
router.get('/google/callback',passport.authenticate('google'),function(req,res){
	res.send('You reached the callback URI');
});

module.exports = router;

