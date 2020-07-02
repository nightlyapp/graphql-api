import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasOne,
  Model,
  Table,
  UpdatedAt,
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

  @Column({
    allowNull: false,
    type: DataType.TIME,
  })
  openTime!: string;

  @Column({
    allowNull: false,
    type: DataType.TIME,
  })
  closeTime!: string;

  @Column({
    allowNull: false,
    type: DataType.TIME,
  })
  nomeComercial!: string;

  @HasOne(() => Geolocation, "id")
  geolocation!: Geolocation;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
