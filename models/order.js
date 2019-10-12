const mongoose= require('mongoose');
Schema = mongoose.Schema;
  var ObjectId=require('mongoose').Types.ObjectId;
    var order= mongoose.model('order',{
      
        orderDate :{type:String},
        customerName:{type:String},
        customerContact:{type:Number},
        totalAmount:{type:Number},
        products:[{
        type:Array
        }],
       
        });
    
  module.exports={order};
  