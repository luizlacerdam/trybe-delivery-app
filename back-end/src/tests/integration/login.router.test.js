const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const app = require('../../api/app');
const { User } = require('../../database/models');
const { user, newUser, newUserRes } = require('../mocks/users');

const { expect } = chai;

chai.use(chaiHttp);

    describe('Test route /login', function () {
    afterEach(sinon.restore);
    it('1. POST /login with user not found', async function () {
        sinon.stub(User, 'findOne').resolves();
        const chaihttpResponse = await chai
        .request(app).post('/login').send(user);
        expect(chaihttpResponse.status).to.be.equal(404);
        expect(chaihttpResponse.body).to.be.deep.equal({ message: 'User not found' });
    });
    it('2. POST /login valid user', async function () {
        sinon.stub(User, 'findOne').resolves(user);
        sinon.stub(jwt, 'sign').returns(newUserRes.token);
        const chaihttpResponse = await chai
        .request(app).post('/login').send(newUser);
        expect(chaihttpResponse.status).to.be.equal(200);
        expect(chaihttpResponse.body).to.be.deep.equal({ token: newUserRes.token,
user: { 
            id: user.id, name: user.name, email: user.email, role: user.role } });
    });
});