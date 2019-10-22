const express = require('express')
const router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
router.use(cors())

process.env.SECRET_KEY = 'secret'

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}

router.post('/register', (req, res) => {
  //let userData = req.body
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
    //token:token
  }

  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)
    } else {
      let payload = {
              _id: registeredUser._id
              
      }
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({
        token:token,
              _id: registeredUser._id,
              first_name: registeredUser.first_name,
              last_name: registeredUser.last_name,
              email: registeredUser.email
      })
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({
    email: userData.email
  }, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else
      if (user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {
               _id: user._id
              
        }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({
          token:token,
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        })
      }
    }
  })
})

module.exports = router