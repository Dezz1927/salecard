var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta content="ie=edge" http-equiv="x-ua-compatible"><title>Webpack App</title><link href="vendors.css" rel="stylesheet"/><link href="main.css" rel="stylesheet"/><link href="vendors.css" rel="stylesheet"><link href="main.css" rel="stylesheet"></head><body><div id="app"></div><script src="runtime.6459fc6da2a0c7e7647f.js"></script><script src="vendors.b42c52cc4018ce0c94c8.js"></script><script src="main.c6d13a25857728e19250.js"></script></body></html>');
});

module.exports = router;
