const mongoose= require('mongoose');
Schema = mongoose.Schema;
  var ObjectId=require('mongoose').Types.ObjectId;
    var customer= mongoose.model('customer',{
      
        customerName :{type:String},
        customerContact:{type:Number,unique:true}
       
        });
    
  module.exports={customer};
  