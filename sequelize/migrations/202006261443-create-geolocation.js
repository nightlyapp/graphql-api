module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "geolocations",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        references: {
          key: "id",
          model: "pubs",
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cep: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      latitude: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      longitude: {
        allowNull: false,
        type: DataTypes.FLOAT,
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
},

  module.exports.down = (queryInterface) => queryInterface.dropTable("geolocations")


