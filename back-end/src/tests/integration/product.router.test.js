const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const app = require('../../api/app');
const { Product } = require('../../database/models');
const { user, newUser, newUserRes } = require('../mocks/users');
const { products } = require('../mocks/products');

const { expect } = chai;

chai.use(chaiHttp);

    describe('Test route /customer/products', function () {
    afterEach(sinon.restore);
    it('1. GET /customer/products get all products', async function () {
        sinon.stub(Product, 'findAll').resolves(products.allProducts);
        const chaihttpResponse = await chai
        .request(app).get('/customer/products');
        expect(chaihttpResponse.status).to.be.equal(200);
        expect(chaihttpResponse.body).to.be.deep.equal(products);
    });
//     it('2. GET /product:id get product by id', async function () {
//         sinon.stub(User, 'findOne').resolves(user);
//         sinon.stub(jwt, 'sign').returns(newUserRes.token);
//         const chaihttpResponse = await chai
//         .request(app).post('/login').send(newUser);
//         expect(chaihttpResponse.status).to.be.equal(200);
//         expect(chaihttpResponse.body).to.be.deep.equal({ token: newUserRes.token,
// user: { 
//             id: user.id, name: user.name, email: user.email, role: user.role } });
//     });
//     it('2. POST /product add new product', async function () {
//         sinon.stub(User, 'findOne').resolves(user);
//         sinon.stub(jwt, 'sign').returns(newUserRes.token);
//         const chaihttpResponse = await chai
//         .request(app).post('/login').send(newUser);
//         expect(chaihttpResponse.status).to.be.equal(200);
//         expect(chaihttpResponse.body).to.be.deep.equal({ token: newUserRes.token,
// user: { 
//             id: user.id, name: user.name, email: user.email, role: user.role } });
//     });
});