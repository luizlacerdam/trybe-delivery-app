const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../api/app');
const { Product } = require('../../database/models');
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
    it('2. GET /customer/products:id get product by id', async function () {
        sinon.stub(Product, 'findOne').resolves(products.allProducts[0]);
        const chaihttpResponse = await chai
        .request(app).get('/customer/products/1');
        expect(chaihttpResponse.status).to.be.equal(200);
        expect(chaihttpResponse.body.product).to.be.deep.equal(products.allProducts[0]);
    });
});