var express = require('express');
var nameDB = require('./name-db');
var _s = require('underscore.string');

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

app.get(
  '/greetings',
  function sendResponse(req, res, err) {
    var names = nameDB.getRandomNames(3); //Use the function form the name model.
    var greetings = `Greetings from ${_s.toSentenceSerial(names)}!`; //This is a function from the underscore.string module that returns elements of a array as a string in oxford comma format.
    res.status(200).send(greetings);
  }
);
