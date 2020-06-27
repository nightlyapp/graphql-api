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
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Pub } from "./Pub";

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

  @BelongsTo(() => Pub)
  pub!: Pub;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
