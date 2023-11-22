'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [{
        name: 'Kampegowda International Airport',
        cityId : 4,
        createdAt : new Date (),
        updatedAt : new Date ()
        
       },
       {
        name: 'MYsure International Airport',
        cityId : 4,
        createdAt : new Date (),
        updatedAt : new Date ()
        
       },
       {
        name: 'thoda thoda hindi ATA International Airport',
        cityId : 4,
        createdAt : new Date (),
        updatedAt : new Date ()
        
       },
       {
        name: 'csmt International Airport',
        cityId : 3,
        createdAt : new Date (),
        updatedAt : new Date ()
        
       }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
