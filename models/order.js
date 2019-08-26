const mongoose= require('mongoose');
Schema = mongoose.Schema;
  var ObjectId=require('mongoose').Types.ObjectId;
    var order= mongoose.model('order',{
      
        orderDate :{type:String},
        customerName:{type:String},
        customerContact:{type:Number},
        productName:{type:String},
        rate:{type:Number},
        quantity:{type:Number},
        totalAmount:{type:Number}

        });
    
  module.exports={order};
  