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
    autoIncrement: false,
    primaryKey: true,
    type: DataType.STRING,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  cnpj?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  phone?: string;

  @HasOne(() => Geolocation, "id")
  geolocation!: Geolocation;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
