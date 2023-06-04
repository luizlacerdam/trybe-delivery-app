const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const app = require('../../api/app');
const { User } = require('../../database/models');
const { user, newUser, newUserRes } = require('../mocks/users');

const { expect } = chai;

chai.use(chaiHttp);

    describe('Test route /register', function () {
    afterEach(sinon.restore);
    it('1. POST /register with user already exist', async function () {
        sinon.stub(User, 'findOne').resolves(user);
        const chaihttpResponse = await chai
        .request(app).post('/register').send(user);
        expect(chaihttpResponse.status).to.be.equal(409);
        expect(chaihttpResponse.body).to.be.deep.equal({ message: 'Email já cadastrado.' });
    });
    it('2. POST /register valid email', async function () {
        sinon.stub(User, 'findOne').resolves();
        sinon.stub(jwt, 'sign').returns(newUserRes.token);
        sinon.stub(User, 'create').resolves(user);
        const chaihttpResponse = await chai
        .request(app).post('/register').send(newUser);
        expect(chaihttpResponse.status).to.be.equal(201);
        expect(chaihttpResponse.body).to.be.deep.equal({ token: newUserRes.token,
user: { 
            id: user.id, name: user.name, email: user.email, role: user.role } });
    });
});