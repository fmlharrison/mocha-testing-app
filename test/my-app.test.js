var expect = require('chai').expect;

describe('Sample web app', function() {
  var baseUrl = 'http://localhost:8080';

  describe('when requested at /hello', function() {
    it('should say hello', function() {
      request.get(baseUrl + '/hello').end(function assert(err, res) {
        expect(err).to.not.be.ok; //expecting no error
        expect(res).to.have.property('status', 200); //expecting to have a status code of 200.
        expect(res.text).to.equal('Hello world!'); //expecting the response to have text that reads 'Hello world!'
        done(); //This is a callback to be called when the request is done.
      });
    });
  });
});
