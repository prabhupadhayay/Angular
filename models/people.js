const mongoose= require('mongoose');
Schema = mongoose.Schema;
  var ObjectId=require('mongoose').Types.ObjectId;
    var people= mongoose.model('people',{
      
        firstName :{type:String},
        lastName:{type:String},
        dob:{type:String}
        
        });
    
  module.exports={people};
  