const express=require('express');
var route=express.Router();
var ObjectId=require('mongoose');
var ObjectId=require('mongoose').Types.ObjectId;




var {order} =require('../models/order');

route.get('/',(req,res)=> {
    order.find((err,docs) =>{
        if(!err){
            res.send(docs);
            
        }
        else console.log('Error is:' +JSON.stringify(err,undefined,2));
    });
});



route.get('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Records with given id  ${ req.params.id}`);
    
    order.findById(req.params.id,(err,doc)=>{
        if(!err)
        res.send(doc);
        else
        console.log("error there :" +JSON.stringify(err,undefined,2));
    })
})



route.put('/:id', (req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`No Records with given id  ${ req.params.id}`);


    var rog={
    
    
        orderDate: new Date(),
        customerName: req.body.customerName,
        customerContact: req.body.customerContact,
        products:[{
        productName:req.body.productName,
        quantity:req.body.quantity,
        rate:req.body.rate,
        total:req.body.total
    }],
    totalAmount:req.body.totalAmount
    };
order.findByIdAndUpdate(req.params.id,{$set:rog},{new:true},(err,doc)=>
{
    if(!err)res.send(doc);
    else console.log('error :' +JSON.stringify(err,undefined,2));
})
});



route.delete('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Records with given id  ${ req.params.id}`);
    order.findByIdAndDelete(req.params.id,(err,doc)=>
{
    if(!err)res.send(doc);
    else console.log('error :' +JSON.stringify(err,undefined,2));
})
});



route.post('/', (req,res)=>
{
    var rog=new order({
        
        orderDate: new Date(),
        customerName: req.body.customerName,
        customerContact: req.body.customerContact,
        products:[
            req.body.products
        // productName:req.body.productName,
        // quantity:req.body.quantity,
        // rate:req.body.rate,
        // total:req.body.total
    ],
    totalAmount:req.body.totalAmount
    })
    

    rog.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("error while doing post " +JSON.stringify(err,undefined,2));
        }
    });

});
module.exports=route;