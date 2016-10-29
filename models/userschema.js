var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    password: String,
    email: String
});

var user = mongoose.model('User', userSchema);

//Do we really need this??
//costumeSchame.set('autoIndex', false);
module.exports = user;
