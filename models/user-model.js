var mongooose = require('mongoose');


var userSchema = new mongooose.Schema({
	 username:String,
	 googleId:String

});

module.exports = mongooose.model('user',userSchema);