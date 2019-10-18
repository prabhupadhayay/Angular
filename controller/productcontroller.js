const express=require('express');
var route=express.Router();
var ObjectId=require('mongoose');
var ObjectId=require('mongoose').Types.ObjectId;




var {product} =require('../models/product');

route.get('/',(req,res)=> {
    product.find((err,docs) =>{
        if(!err){
            res.send(docs);
            
        }
        else console.log('Error is:' +JSON.stringify(err,undefined,2));
    });
});



route.get('/:id',(req,res)=>
{
    //if(id != null){
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Records with given id  ${ req.params.id}`);
    
    product.findById(req.params.id,(err,doc)=>{
        if(!err)
        res.send(doc);
        else
        console.log("error there :" +JSON.stringify(err,undefined,2));
        
    })
})

// route.get('',(req,res)=>
// {
//     //if(id != null){
    

//         var rog={
    
    
//             productName: req.body.productName,
           
//         };

//     product.find(req.params.productName,{$set:rog},{new:true},(err,doc)=>{
//         if(!err)
//         res.send(doc);
//         else
//         console.log("error there :" +JSON.stringify(err,undefined,2));
        
//     })
// })


//}
// if(product.productName != null || product.productName != "") {
    
    
//     product.find(req.params.productName,(err,doc)=>{
//         if(!err)
//         res.send(doc);
//         else
//         console.log("error there :" +JSON.stringify(err,undefined,2));
        
//     })
// }





route.put('/:id', (req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`No Records with given id  ${ req.params.id}`);


    var rog={
    
        
        productName: req.body.productName,
        quantity: req.body.quantity,
        rate: req.body.rate
        
    };
product.findByIdAndUpdate(req.params.id,{$set:rog},{new:true},(err,doc)=>
{
    if(!err)res.send(doc);
    else console.log('error :' +JSON.stringify(err,undefined,2));
})
});



route.delete('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Records with given id  ${ req.params.id}`);
    product.findByIdAndDelete(req.params.id,(err,doc)=>
{
    if(!err)res.send(doc);
    else console.log('error :' +JSON.stringify(err,undefined,2));
})
});



route.post('/', (req,res)=>
{
    var rog=new product({
        
        productName: req.body.productName,
        quantity: req.body.quantity,
        rate: req.body.rate
        
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