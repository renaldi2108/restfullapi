var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var identitasSchema = new Schema({
	nama : {
		type: String
	},
	tempatlahir : {
		type: String
	},
	umur : {
		type: Number
	}

});

var Identitas = mongoose.model("identitas", identitasSchema);
module.exports.Identitas = Identitas;