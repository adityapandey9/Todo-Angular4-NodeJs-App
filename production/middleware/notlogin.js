var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config/config');

router.use(function(req, res, next){
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.headers['x-access-token'] || req.headers['token'];
    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.secret, function(err, decoded) {      
        if (err) {
            next();
        } else {
          // if everything is good, return the error message
          return res.json({ success: false, message: 'Already login, please logout.' });  
        }
      });
  
    } else {
      // if there is no token
      // goto new handlers
      next()
    }
});

module.exports = router;