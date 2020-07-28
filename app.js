
var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
    //Email      = require("./models/email");

var port = process.env.PORT || 5000;

//mongoose.connect("mongodb://localhost:27017/newsletter");

app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/" , function(req,res){
   res.render("index");
});

app.get("/success" , function(req,res){
    res.render("success");
});

//!Email#########################################



app.post("/" ,function(req,res){

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '19p141@kce.ac.in',
          pass: '8973040688'
        }
      });

    var emailadd = req.body.email;

    var mailOptions = {
        from: '"Vignesh Bharathi" vignesh20010722@gmail.com',
        to: emailadd,
        subject: 'The More You Learn The More You Earn',
       
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.redirect("/success");
});










app.listen(port , function(){
   console.log("Server connected");
});




