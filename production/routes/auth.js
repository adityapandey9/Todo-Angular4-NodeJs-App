var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var mongoose = require('mongoose');

router.post('/', function(req, res, next){
    const userone = User.where({name: req.body.name});	
    userone.findOne(function(err, user){
        if (err) return next(err);  
            if (!user) {
              res.status(400);
              res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else if (user) {
              // check if password matches
              if (user.password != req.body.password) {
                res.status(400);
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
              } else {
                const payload = {
                    usermain: req.body.name
                  };
                var token = jwt.sign(payload, config.secret, {
                    expiresIn: '1h' // expires in 1 hours
                  });
				
                  // return the information including token as JSON
                  res.json({
                    success: true,
                    message: 'Here is your token',
                    token: token
                  });
            }
        }
    });
});

router.post('/create', function(req, res, next){
    const userone = User.where({name: req.body.name});
    userone.findOne(function(err, user){
        if (err) return next(err);  
            if (!user) {
                const user = new User(req.body);
                user.save(function (err) {
                if (err) {
                return next(err);
                } else {
				const payload = {
                    usermain: req.body.name
                  };
                var token = jwt.sign(payload, config.secret, {
                    expiresIn: '1h' // expires in 1 hours
                  });
                res.json({
                    success: true,
                    message: 'Here is your token',
                    token: token
                  });
                }
            });
        } else {
            res.status(400);
            res.json({ success: false, message: 'Signup faild. There is an User with same name, kindly change it.' });
        }
    });
});
router.get('/setup', function(req, res) {
    
      // create a sample user
      var aditya = new User({ 
        name: 'Aditya', 
        password: '1234'
      });
    
      // save the sample user
      aditya.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully');
        res.json({ success: true });
      });
});

module.exports = router;