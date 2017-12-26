var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.use(function(req, res, next){
    //Sending header request
	if(!mongoose.connection.readyState){
        res.json({success: false, message: "MongoDB connection has lost, please connect it"});
    }
    next();
  });

  module.exports = router;