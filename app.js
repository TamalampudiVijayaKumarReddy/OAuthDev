var express    = require('express');
var authRoutes = require('./routes/auth-routes');
var passportSetup = require('./config/passport-setup');
var mongoose    = require('mongoose');
// var cookieSession = require('cookie-session');
var keys =require('./config/keys');
var app = express();

//set up view engine
app.set("view engine","ejs");

// //set up cookie-session
// app.set(cookieSession({
// 	maxAge:24*60*60*1000,
// 	keys:[keys.session.cookieKey]
// }));


//set up mongodb connection
mongoose.connect('mongodb://localhost/OAuthDev',{ useUnifiedTopology: true ,useNewUrlParser: true },function(){
	console.log('Connected to mongodb');
});

//set up routes
app.use('/auth',authRoutes);

app.get('/',function(req,res){
	res.render('home');
});

app.listen(3000,function(){
	console.log('Server is listening at port 3000');
});