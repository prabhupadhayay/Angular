const mongoose= require('mongoose');
Schema = mongoose.Schema;
  var ObjectId=require('mongoose').Types.ObjectId;
  // ObjectId = product.ObjectId;
    var product= mongoose.model('product',{
        //id:{type:ObjectId},
        productName :{type:String, unique: true, required: true},
        quantity:{type:Number},
        rate:{type:Number, required: true}
        
        });
    
  module.exports={product};
  