var expect = require('chai').expect;
var request = require('superagent');

describe('Sample web app', function() {
  var myApp = require('../lib/my-app'); // require the app file from the lib directory so we can use the exported functions.
  var port = 8080; //give the port that the server will connect to.
  var baseUrl = "http://localhost:" + port;

  before(function(done) { //start the server before each test.
    myApp.start(port, done);
  });

  after(function(done) { //close the server after each test.
    myApp.stop(done);
  });

  describe('when requested at /hello', function() {
    it('should say hello', function(done) {
      request.get(baseUrl + '/hello').end(function assert(err, res) {
        expect(err).to.not.be.ok; //expecting no error
        expect(res).to.have.property('status', 200); //expecting to have a status code of 200.
        expect(res.text).to.equal('Hello world!'); //expecting the response to have text that reads 'Hello world!'
        done(); //This is a callback to be called when the request is done.
      });
    });
  });

  describe('when requested at /greetings', function() {
    it('should greet us', function(done) {
      request.get(baseUrl + '/greetings').end(function assert(err, res) {
        expect(err).to.not.be.ok;
        expect(res).to.have.property('status', 200);
        expect(res.text).to.match(/Greetings from.*?, and.*?!/i); //Using regex to test for a greeting in the response text.
        done();
      });
    });
  });
});
