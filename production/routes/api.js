var express = require('express');
var router = express.Router();
var List = require('../models/todo_list');
var mongoose = require('mongoose');

/* GET todo listing. */
router.get('/', function(req, res, next) {
  List.find(function (err, lists) {
    if (err) return next(err);
    res.json(lists);
  });
});

router.get('/search', function(req, res, next){
  
})

router.post('/', function(req, res, next){
  const list = new List(req.body);
  list.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json({success: true, message:"data has saved successfully."});
    }
  });
});

router.post('/:id', function(req, res, next){
  List.update({_id:req.params.id}, req.body, {upsert: true, new: true, runValidators: true},function (err, post) {
    if (err){
      return next(err);
    } 
    res.json({success: true, message:"data has updated successfully."});
  });
});

module.exports = router;
