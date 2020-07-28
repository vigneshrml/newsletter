var mongoose = require("mongoose");

var EmailSchema = new mongoose.Schema({
    email : String
});

module.exports = mongoose.model("Email", EmailSchema);