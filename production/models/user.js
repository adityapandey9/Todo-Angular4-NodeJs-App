var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('user', new Schema({ 
    name: String, 
    password: String
}));