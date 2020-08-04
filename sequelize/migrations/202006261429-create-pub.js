module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "pubs",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      businessName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      openTime: {
        allowNull: false,
        type: DataTypes.TIME
      },
      closeTime: {
        allowNull: false,
        type: DataTypes.TIME
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    },
    {
      charset: "utf8"
    }
  );
},

  module.exports.down = (queryInterface) => queryInterface.dropTable("pubs")
