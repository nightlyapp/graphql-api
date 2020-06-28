"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const accessEnv_1 = require("#root/helpers/accessEnv");
const models_1 = require("./models");
const dbURL = accessEnv_1.default("DB_URL");
const sequelize = new sequelize_typescript_1.Sequelize(dbURL, {
    dialectOptions: {
        charset: "utf8",
        multipleStatements: true,
    },
    logging: false,
    models: models_1.default,
});
exports.default = sequelize;
