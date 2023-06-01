const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../api/app');
const { User } = require('../../database/models');

const { expect } = chai;

chai.use(chaiHttp);

const user = { id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller' };

    describe('Test route /register', function () {
    afterEach(sinon.restore);
    it('1. POST /register with user already exist', async function () {
        sinon.stub(User, 'findOne').resolves(user);
        const chaihttpResponse = await chai
        .request(app).post('/register').send(user);
        expect(chaihttpResponse.status).to.be.equal(409);
        expect(chaihttpResponse.body).to.be.deep.equal({ message: 'Email já cadastrado.' });
    });
});