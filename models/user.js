const mongoose= require('mongoose');
Schema = mongoose.Schema;
  var ObjectId=require('mongoose').Types.ObjectId;
    var user= mongoose.model('user',{
      
        userName :{type:String},
        password:{type:String},
        email:{type:String},
        timezone:{type:String}
        });
    
  module.exports={user};
  