var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var costumeSchema = new Schema({
  imagePath: String,
  title:  String,
  description: String,
  userID: Number,
  userName: String,
  likes: Number,
  dislikes: Number,
  comments: [{user: String, message: String}]
});

var costume = mongoose.model('Costume', costumeSchema);

//Do we really need this??
//costumeSchame.set('autoIndex', false);
module.exports = costume;
