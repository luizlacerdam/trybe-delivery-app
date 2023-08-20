const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const app = require('../../api/app');
const { Product } = require('../../database/models');
const { products, newProduct } = require('../mocks/products');
const { adminLogin } = require('../mocks/users');

const { expect } = chai;

chai.use(chaiHttp);

    describe('Test route /customer/products', function () {
    afterEach(sinon.restore);
    it('1. GET /customer/products get all products', async function () {
        sinon.stub(Product, 'findAll').resolves(products.allProducts);

        sinon.stub(jwt, 'verify').returns(
            { data: {
            ...adminLogin.user,
            iat: 1680969877,
            exp: 1681574677,
        } },
);
        
        const chaihttpResponse = await chai
        .request(app).get('/customer/products').set('Authorization', adminLogin.token);
        expect(chaihttpResponse.status).to.be.equal(200);
        expect(chaihttpResponse.body).to.be.deep.equal(products);
    });
    it('2. GET /customer/products:id get product by id', async function () {
        sinon.stub(Product, 'findOne').resolves(products.allProducts[0]);
        sinon.stub(jwt, 'verify').returns(
            { data: {
            ...adminLogin.user,
            iat: 1680969877,
            exp: 1681574677,
        } },
);
        const chaihttpResponse = await chai
        .request(app).get('/customer/products/1').set('Authorization', adminLogin.token);
        expect(chaihttpResponse.status).to.be.equal(200);
        expect(chaihttpResponse.body.product).to.be.deep.equal(products.allProducts[0]);
    });
    it('3. POST /customer/products adds new product', async function () {
        sinon.stub(Product, 'create').resolves(products.allProducts[0]);
        sinon.stub(jwt, 'verify').returns(
            { data: {
            ...adminLogin.user,
            iat: 1680969877,
            exp: 1681574677,
        } },
);
        const chaihttpResponse = await chai
        .request(app).post('/customer/products').send({ ...newProduct })
        .set('Authorization', adminLogin.token);
        expect(chaihttpResponse.status).to.be.equal(201);
        expect(chaihttpResponse.body.newProduct).to.be.deep.equal(products.allProducts[0]);
    });
});