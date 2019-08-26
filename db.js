const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudDb', { useFindAndModify: false ,useNewUrlParser: true },(err)=>
{
    if(!err)
    console.log("MongoDb Connected Successfully");
    else 
    console.log('error in db:' +JSON.stringify(err,undefined,2));
});
 module.exports= mongoose;