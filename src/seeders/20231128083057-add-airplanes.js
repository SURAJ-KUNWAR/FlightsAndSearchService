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
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Boeing747',
        capacity : 400,
        createdAt : new Date (),
        updatedAt : new Date ()
        
       },
       {
        modelNumber: 'Boeing247',
        capacity : 450,
        createdAt : new Date (),
        updatedAt : new Date ()
        
       },
       {
        modelNumber: 'Boeing347',
        capacity : 350,
        createdAt : new Date (),
        updatedAt : new Date ()
        
       },{
        modelNumber: 'AirbusA440',
        capacity : 250,
        createdAt : new Date (),
        updatedAt : new Date ()
        
       }

    ])
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
