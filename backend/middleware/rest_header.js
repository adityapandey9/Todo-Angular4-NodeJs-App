var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    //Sending header request
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Expires", "Mon, 26 Jul 1997 05:00:00 GMT");
	res.header("Cache-Control", "no-cache, must-revalidate");
	res.header("Content-type", "application/json");
	res.header("Content-language", "en");
    res.header("Server", "cloudflare-nginx");
    next();
  });

  module.exports = router;