(module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "pubs",
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cnpj: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: "utf8",
    }
  );
}),
  (module.exports.down = (queryInterface) => queryInterface.dropTable("pubs"));
