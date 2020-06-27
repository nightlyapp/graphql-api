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

  @HasMany(() => Geolocation)
  geolocations!: Geolocation;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;

  // @BelongsToMany(() => User, () => UserPub)
  // users!: User[];

  // @BelongsToMany(() => FastInfo, () => FastInfoPub)
  // fastInfo!: FastInfo[];

  // @BeforeCreate
  // static createId(pub: Pub) {
  //   pub.id = uuid();
  // }
}
