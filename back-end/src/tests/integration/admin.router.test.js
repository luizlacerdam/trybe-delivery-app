const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const app = require('../../api/app');
const { User } = require('../../database/models');
const { allUsers, adminLogin } = require('../mocks/users');

const { expect } = chai;

chai.use(chaiHttp);

    describe('Test route /admin/manage', function () {
    afterEach(sinon.restore);
    it('1. GET /admin/manage get all users', async function () {
       sinon.stub(User, 'findAll').resolves(allUsers.users);

        sinon.stub(jwt, 'verify').returns(
            { data: {
            ...adminLogin.user,
            iat: 1680969877,
            exp: 1681574677,
        } },
);

        const chaihttpResponse = await chai
        .request(app).get('/admin/manage').set('Authorization', adminLogin.token);
        expect(chaihttpResponse.status).to.be.equal(200);
        expect(chaihttpResponse.body).to.be.deep.equal(allUsers);
    });
});