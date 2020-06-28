import {
  Table,
  Column,
  Model,
  HasMany,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AllowNull,
  BelongsToMany,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { Pub } from "./pub";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] },
  },
  paranoid: true,
  tableName: "geolocations",
})
export class Geolocation extends Model<Geolocation> {
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

  @ForeignKey(() => Pub)
  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
  })
  pubId!: string;

  @BelongsTo(() => Pub, "pubId")
  pub!: Pub;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
