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
import { ImageSys } from "./imageSys";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] },
  },
  paranoid: true,
  tableName: "users",
})
export class User extends Model<User> {
  @Column({
    allowNull: false,
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
    type: DataType.STRING,
  })
  email!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  password!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  cellPhone!: string;

  @Column({
    type: DataType.DATE,
  })
  idade!: number;

  @Column({
    type: DataType.INTEGER,
  })
  genero!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
  })
  @ForeignKey(() => ImageSys)
  profileImgId!: string;

  @BelongsTo(() => ImageSys)
  ImagemSys!: ImageSys;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
