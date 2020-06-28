module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.sequelize.transaction(t => {
    return Promise.all([
      queryInterface.addColumn('pubs', 'openTime', {
        type: DataTypes.DATE
      }, { transaction: t }),
      queryInterface.addColumn('pubs', 'closeTime', {
        type: DataTypes.DATE,
      }, { transaction: t })
    ]);
  });
}
module.exports.down = (queryInterface) => {
  return queryInterface.sequelize.transaction(t => {
    return Promise.all([
      queryInterface.removeColumn('pubs', 'openTime', { transaction: t }),
      queryInterface.removeColumn('pubs', 'closeTime', { transaction: t })
    ]);
  });
}