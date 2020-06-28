import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  AllowNull,
  BelongsToMany,
  HasOne,
  IsUUID,
  PrimaryKey,
  BeforeCreate,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Geolocation } from "./geolocation";
// import { TinyIntegerDataType } from "sequelize/types";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] },
  },
  paranoid: true,
  tableName: "pubs",
})
export class Pub extends Model<Pub> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @HasOne(() => Geolocation, "id")
  geolocation!: Geolocation;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
