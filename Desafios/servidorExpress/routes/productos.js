var express = require('express');
var router = express.Router();

let producto = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(producto);
});