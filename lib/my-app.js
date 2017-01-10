var express = require('express');

var app = express();
var server;

var start = exports.start = function start(port, callback) {
  server = app.listen(port, callback);
};

var stop = exports.stop = function stop(callback) {
  server.close(callback);
};

app.get(
  '/hello',
  function sendResponse(req, res, err) {
    res.status(200).send('Hello world!');
  }
);
