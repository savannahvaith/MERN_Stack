const app = require('../server');
// import CHAI
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
// import expect from chai
const expect = chai.expect;
const { LIST_URL } = require("../config/consts.json");


describe("List Routes", function () {

    it('/Hello -> Should return "hello', (done) => {
        chai.request(app)
        .get(`${LIST_URL}/hello`)
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.property('text', 'hello');
            done();
        });
    });
    
    
    it("/Create => should add to the list", (done) => {
        chai.request(app)
        .post(`${LIST_URL}/create`)
        .send({ 'title': 'Test' })
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res).to.have.property('text', 'Test added successfully!');
            done();
        });
    });
    
    
    it('/GetAll => should return all of the elements in the db', (done) => {
        chai.request(app)
        .get(`${LIST_URL}/getAll`)
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // expect(res).to.have.property('text', '[]');
            done();
        });
    });

    // After everything, close the server
    after(function () {
        app.close();
    });
});

