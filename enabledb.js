var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/sample-chat");

var Schema = mongoose.Schema;


UserSchema = new Schema({
  email: String,
  password : String
});


User = mongoose.model('User', UserSchema);

this.exports = { user: User}

/*
  var db = require("./enabledb").exports
  Source = db.source
*/ 