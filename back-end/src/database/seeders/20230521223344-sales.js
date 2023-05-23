/* eslint-disable camelcase */
const arrayOfObjects = [
  {
    id: 1,
    user_id: 123,
    seller_id: 456,
    total_price: 99.99,
    delivery_address: '123 Street',
    delivery_number: 5,
    sale_date: '2022-01-01',
    status: 'Pending',
  },
  {
    id: 2,
    user_id: 456,
    seller_id: 789,
    total_price: 149.99,
    delivery_address: '456 Avenue',
    delivery_number: 10,
    sale_date: '2022-02-01',
    status: 'Processing',
  },
  {
    id: 10,
    user_id: 789,
    seller_id: 123,
    total_price: 199.99,
    delivery_address: '789 Road',
    delivery_number: 15,
    sale_date: '2022-10-01',
    status: 'Delivered',
  },
];

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('sales', arrayOfObjects.map((sale) => sale));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
