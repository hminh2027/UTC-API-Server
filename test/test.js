process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('../index')
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
            let credential = {
                username: '191210709',
                password: '85273200'
            }

            chai.request(app)
                .post('/schedule')
                .send(credential)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done()
                })
        });
    });
});