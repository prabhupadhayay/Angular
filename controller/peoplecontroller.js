const express=require('express');
var route=express.Router();
var ObjectId=require('mongoose');
var ObjectId=require('mongoose').Types.ObjectId;




var {people} =require('../models/people');

route.get('/',(req,res)=> {
    people.find((err,docs) =>{
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
    
    people.findById(req.params.id,(err,doc)=>{
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
    
    
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob
        
    };
people.findByIdAndUpdate(req.params.id,{$set:rog},{new:true},(err,doc)=>
{
    if(!err)res.send(doc);
    else console.log('error :' +JSON.stringify(err,undefined,2));
})
});



route.delete('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Records with given id  ${ req.params.id}`);
    people.findByIdAndDelete(req.params.id,(err,doc)=>
{
    if(!err)res.send(doc);
    else console.log('error :' +JSON.stringify(err,undefined,2));
})
});



route.post('/', (req,res)=>
{
    var rog=new people({
        
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob
        
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