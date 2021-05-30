
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
          pass: 'Vicky@22'
        }
      });

    var emailadd = req.body.email;

    var mailOptions = {
        from: '"Vignesh Bharathi" 19p141@kce.ac.in',
        to: emailadd,
        subject: 'Better Luck next time',
        html: '<b style="color:#FCAF3B;font-size:35px;">Better Luck Next Time 😂😂😂</b>'
      };

     transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.render("success");
        }
      });
});



app.listen(port , function(){
   console.log("Server connected on Heroku");
});




