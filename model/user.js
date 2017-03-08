var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username : {
		type: String
	},
	password : {
		type: String
	},
	admin : {
		type: Boolean
	}
});

var User = mongoose.model("User", userSchema);
module.exports.User = User;
