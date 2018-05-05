const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;



var assert = require('assert');
var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;



describe('API_TEST_GET_NEEDS', function() {

    describe('/GET needs', () => {
      it('it should GET all the needs', (done) => {
        chai.request('http://localhost:5000')
            .get('/needs')
              .end((err, res) => {
		  expect(err).to.be.null;
		  expect(res).to.have.status(200);
		  console.log(res);
		  done();
	      }
		  )
      });
    })
});

describe('Array', function() {
    describe('#indexOf()', function() {
	it('should return -1 when the value is not present', function() {
	    assert.equal([1,2,3].indexOf(4), -1);
	});
    });
});
