import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
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
  @ForeignKey(() => Geolocation)
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
  address!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  cep!: string;

  @Column({
    allowNull: false,
    type: DataType.FLOAT,
  })
  latitude!: number;

  @Column({
    allowNull: false,
    type: DataType.FLOAT,
  })
  longitude!: number;

  @BelongsTo(() => Pub, "id")
  pub!: Pub;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
