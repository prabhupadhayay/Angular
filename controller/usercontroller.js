const express = require('express');
var route = express.Router();
var ObjectId = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;




var {
    user
} = require('../models/user');

route.get('/', (req, res) => {
    user.find((err, docs) => {
        if (!err) {
            res.send(docs);

        } else console.log('Error is:' + JSON.stringify(err, undefined, 2));
    });
});



route.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Records with given id  ${ req.params.id}`);

    user.findById(req.params.id, (err, doc) => {
        if (!err)
            res.send(doc);
        else
            console.log("error there :" + JSON.stringify(err, undefined, 2));
    })
})



route.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Records with given id  ${ req.params.id}`);
    // let now = new Date();
    // now.toUTCString();
    // new Date(now.toUTCString());
    var rog = {


        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        timezone: new Date()
    };
    user.findByIdAndUpdate(req.params.id, {
        $set: rog
    }, {
        new: true
    }, (err, doc) => {
        if (!err) res.send(doc);
        else console.log('error :' + JSON.stringify(err, undefined, 2));
    })
});



route.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Records with given id  ${ req.params.id}`);
    user.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) res.send(doc);
        else console.log('error :' + JSON.stringify(err, undefined, 2));
    })
});



route.post('/', (req, res) => {

    //     let now = new Date();
    // now.toUTCString();
    // new Date(now.toUTCString());
    var rog = new user({

        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        timezone: new Date()
    })


    rog.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("error while doing post " + JSON.stringify(err, undefined, 2));
        }
    });

});
module.exports = route;