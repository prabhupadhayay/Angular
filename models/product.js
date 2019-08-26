const mongoose= require('mongoose');
Schema = mongoose.Schema;
  var ObjectId=require('mongoose').Types.ObjectId;
    var product= mongoose.model('product',{
      
        productName :{type:String},
        quantity:{type:Number},
        rate:{type:Number}
        
        });
    
  module.exports={product};
  