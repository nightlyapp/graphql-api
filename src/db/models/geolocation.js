"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geolocation = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const pub_1 = require("./pub");
let Geolocation = class Geolocation extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED,
    }),
    __metadata("design:type", String)
], Geolocation.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Geolocation.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => pub_1.Pub),
    sequelize_typescript_1.Column({
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED,
    }),
    __metadata("design:type", String)
], Geolocation.prototype, "pubId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => pub_1.Pub, "pubId"),
    __metadata("design:type", pub_1.Pub)
], Geolocation.prototype, "pub", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Geolocation.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Geolocation.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], Geolocation.prototype, "deletedAt", void 0);
Geolocation = __decorate([
    sequelize_typescript_1.Table({
        defaultScope: {
            attributes: { exclude: ["deletedAt"] },
        },
        paranoid: true,
        tableName: "geolocations",
    })
], Geolocation);
exports.Geolocation = Geolocation;
