process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp)

describe('Api', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done()
    })
    /*
     * Test the /GET route
     */
    describe('/POST schedule', () => {
        it('it should get all the schedule', (done) => {
            chai.request(server)
                .get('/schedule')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(9); // fixme :)
                    done();
                });
        });
    });
});