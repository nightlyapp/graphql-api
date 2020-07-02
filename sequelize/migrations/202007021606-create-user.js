module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      profileImgId: {
        allowNull: false,
        references: {
          key: "id",
          model: "imagensSys"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      cellPhone: {
        allowNull: false,
        type: DataTypes.STRING
      },
      idade: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
      genero: {
        allowNull: false,
        type: DataTypes.ENUM("masculino", "feminino"),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
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

  module.exports.down = (queryInterface) => queryInterface.dropTable("imagensSys")
