const express= require('express');
const bodyparser = require('body-parser')
var urlencodedParser = bodyparser.urlencoded({ extended: false });

 var peopleController=require('./controller/peoplecontroller');
 var productController=require('./controller/productcontroller')
 var customerController=require('./controller/customercontroller')
 var userController= require('./controller/usercontroller')
 var orderController=require('./controller/ordercontroller')

 var cors = require("cors");

 
const {mongoose} =require('./db.js');
 var app=express();
 app.use(bodyparser.json());
  app.use(cors({origin:'http://localhost:4200'}));
 app.listen(3000,() => console.log("Server Started at 3000"));

 app.use('/people',peopleController);
 app.use('/api/product',productController);
 app.use('/api/customer',customerController);
 app.use('/api/user',userController);
 app.use('/api/order',orderController);