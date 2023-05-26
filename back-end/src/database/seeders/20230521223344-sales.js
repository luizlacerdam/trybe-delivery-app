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
    status: 'Pendente',
  },
  {
    id: 2,
    user_id: 456,
    seller_id: 789,
    total_price: 149.99,
    delivery_address: '456 Avenue',
    delivery_number: 10,
    sale_date: '2022-02-01',
    status: 'Preparando',
  },
  {
    id: 3,
    user_id: 789,
    seller_id: 123,
    total_price: 199.99,
    delivery_address: '789 Road',
    delivery_number: 15,
    sale_date: '2022-10-01',
    status: 'Em Trânsito',
  },
  {
    id: 4,
    user_id: 155,
    seller_id: 11,
    total_price: 500.99,
    delivery_address: '548 Road',
    delivery_number: 99,
    sale_date: '2022-10-22',
    status: 'Entregue',
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
