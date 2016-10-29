var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var costumeSchema = new Schema({
  imgPath: String,
  title:  String,
  description: String,
  userName: String,
  rating: Number,
  comments: [{ user:{type: String, default: 'anonymous'}, message: String}]
});

var costume = mongoose.model('costume', costumeSchema);

module.exports = costume;
