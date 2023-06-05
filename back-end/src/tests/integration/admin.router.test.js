// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const sinon = require('sinon');
// const jwt = require('jsonwebtoken');
// const app = require('../../api/app');
// const { User } = require('../../database/models');
// const { allUsers } = require('../mocks/users');

// const { expect } = chai;

// chai.use(chaiHttp);

//     describe('Test route /admin/manage', function () {
//     // afterEach(sinon.restore);
//     // it('1. GET /admin/manage get all users', async function () {
//     //     sinon.stub(User, 'findAll').resolves(allUsers.users);
//     //     sinon.stub(jwt, 'verify').resolves(allUsers.users);
//     //     const chaihttpResponse = await chai
//     //     .request(app).get('/admin/manage');
//     //     expect(chaihttpResponse.status).to.be.equal(200);
//     //     expect(chaihttpResponse.body).to.be.deep.equal(allUsers.users);
//     // });
//     // it('2. GET /customer/products:id get product by id', async function () {
//     //     sinon.stub(Product, 'findOne').resolves(products.allProducts[0]);
//     //     const chaihttpResponse = await chai
//     //     .request(app).get('/customer/products/1');
//     //     expect(chaihttpResponse.status).to.be.equal(200);
//     //     expect(chaihttpResponse.body.product).to.be.deep.equal(products.allProducts[0]);
//     // });
//     // it('3. POST /customer/products adds new product', async function () {
//     //     sinon.stub(Product, 'create').resolves(products.allProducts[0]);
//     //     const chaihttpResponse = await chai
//     //     .request(app).post('/customer/products').send({ ...newProduct });
//     //     expect(chaihttpResponse.status).to.be.equal(201);
//     //     expect(chaihttpResponse.body.newProduct).to.be.deep.equal(products.allProducts[0]);
//     // });
// });