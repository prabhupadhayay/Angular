const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = new Schema({
    first_name:{type:String, required: true},
    last_name:{type:String},
    
    email: {type:String, index: true,unique: true, required: true},
    password:{type:String, required: true},
    token:{type:String},
    created:{type:String}
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user', userSchema, 'users');