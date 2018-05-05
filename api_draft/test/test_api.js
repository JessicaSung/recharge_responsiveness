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
		    expect(res.body).to.be.an('array').that.deep.includes({
			'person'  : 'bob',
			'number' : 2
		    });
		    done();
		}
		    )
	});
    })
    describe('/GET need', () => {
	it('it should GET a need by id', (done) => {
            chai.request('http://localhost:5000')
		.get('/needs/3')
		.end((err, res) => {
		    expect(err).to.be.null;
		    expect(res).to.have.status(200);
		    console.log(res.body);
		    expect(res.body['person']).to.equal('alice');
		    done();
		}
		    )
	});
    })
});

