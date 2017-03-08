// START INCLUDE LIBRARY
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var User = require("./model/user").User; // Include Model user
var Identitas = require("./model/identitas").Identitas;// Include Model Identitas
// END INCLUDE LIBRARY

// START Variable
var app = express();
var apiRoutes = express.Router();
var validasidb = mongoose.connection;
// END Variable

// START Koneksi MongoDB
mongoose.connect('mongodb://localhost/datamongo');

validasidb.on('error', console.error.bind(console, 'error koneksi:'));
validasidb.once('open', function callback () {
console.log("Database connected...");
});
// END Koneksi MongoDB

// START KonfigurasI Token
app.set("mytoken", "seodepok"); 
// END KonfigurasI Token

app.get("/", function(req, res){
	res.send("yey aktif....");
});

// START Autentitkasi API
apiRoutes.post("/auth", function(req, res){
	User.findOne(
		{
			username : req.body.username
		},
		function(error, getuser){
			if(error)
				return res.send(error);
			if(getuser){
				if(getuser.password == req.body.password){
					var tokens = jwt.sign(getuser, app.get("mytoken"), {
						expiresIn: 1440 // 24 Jam Tokens!!
					});
					res.json({ status : "oke", pesan: 'Autentikasi berhasil, horeee....', token : tokens});
				}
				else{
					res.json({ status : "tidak oke", pesan: 'Autentikasi gagal, password yang kamu masukkan tidak benar!'});
				}
			}
	});
});

apiRoutes.use(function(req, res, next){
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	if(token){
		jwt.verify(token, app.get("mytoken"), function(error, decoded){
			if(error){
				return res.json({ status : "tidak oke", pesan: 'Gagal autentikasi token.'});    
			}
			else{
				req.decoded = decoded;
				next();
			}
		});
	}
	else{
		return res.status(403).send({ 
        status: "tidak oke", 
        pesan: 'Saat ini kamu tidak mendapatkan token!' 
    });
	}
});
// END Autentitkasi API

apiRoutes.get("/", function(req, res){
	res.send("Selamat datang di API RenCode");
});

// START REQUEST GET localhost:1998/api/user
apiRoutes.get("/user", function(req, res){
	User.find({}, function(error, user){
		if(error)
			return res.send(error);

		res.json(user);
	});
});

apiRoutes.get("/user/:id", function(req, res){
	User.find({"_id":req.params.id}, function(error, user){
		if(err)
			return res.send(error);

		res.json(user);
	});
});
// END REQUEST GET localhost:1998/api/user

// START REQUEST GET localhost:1998/api/identitas
apiRoutes.post("/identitas", function(req, res){
	var insertidentitas = new Identitas({
		nama: req.body.namalengkap,
		tempatlahir: req.body.tempatlahir,
		umur: req.body.umur
	});

	insertidentitas.save(function(error){
		if(error){
			console.log("Gagal menginput");
			return res.send(error);
		}
		console.log("Sukses untuk menginput!");
		res.json({ status : "oke", pesan: 'Sukses menginput!'});
	});
});

apiRoutes.get("/identitas", function(req, res){
	Identitas.find({}, function(error, identitas){
		if(error)
			return res.send(error);

		res.json(identitas);
	});
});

apiRoutes.get("/identitas/:id", function(req, res){
	Identitas.find({"_id":req.params.id}, function(error, identitas){
		if(error)
			return res.send(error);
		res.json(identitas);
	});
});

apiRoutes.put("/identitas/:id", function(req, res){
	Identitas.findById(req.params.id, function(error, identitas){
		if(error)
			return res.send(error);

		identitas.nama = req.body.namalengkap;
		identitas.tempatlahir = req.body.tempatlahir;
		identitas.umur = req.body.umur;

		identitas.save(function(err){
			if(err)
				return res.send(err);

			res.json({status : "oke", pesan: "Sukses mengedit data.."});
		});
	});
});

apiRoutes.delete("/identitas/:id", function(req, res){
	Identitas.findById(req.params.id, function(error, identitas){
		if(error)
			return res.send(error);
		identitas.remove(function(error){
			if(error)
				return res.send(error);
			res.json({status : "oke", pesan: "Sukses menghapus data"});
		});
	});
});
// END REQUEST GET localhost:1998/api/identitas

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use("/api", apiRoutes);

app.listen(1998); // menggunakan listen port 1998
console.log("running with port 1998");
