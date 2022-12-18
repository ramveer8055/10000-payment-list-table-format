const faker = require('faker');
const payments = [...Array(10000)].map((payment) => (
    {
        uuid: faker.datatype.uuid(),
        mid: faker.random.arrayElement([1, 2, 3, 4]),
        status: faker.random.arrayElement(["paid", "unpaid", "failed"]),
        created_at: faker.date.between('2022-01-01', '2022-12-31'),
        updated_at: new Date()
    }
))

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('payments', payments, {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('payments', null, {});
    }
};