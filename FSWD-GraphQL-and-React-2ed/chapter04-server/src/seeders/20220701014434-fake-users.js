'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          avatar: '/uploads/avatar1.png',
          username: 'TestUser',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/uploads/avatar2.png',
          username: 'TestUser2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
