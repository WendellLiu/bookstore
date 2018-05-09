/* eslint-disable */
module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    queryInterface.addColumn(
      'books',
      'publish_date',
      Sequelize.DATE
    );
  },
  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    queryInterface.removeColumn(
      'books',
      'publish_date'
    );
  }
}
