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
import { ImagemSys } from "./imagemSys";

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
    type: DataType.INTEGER.UNSIGNED,
  })
  idade!: number;

  @Column({
    type: DataType.ENUM(),
  })
  genero!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED
  })
  @ForeignKey(() => ImagemSys)
  profileImgId!: string;

  @BelongsTo(() => ImagemSys)
  ImagemSys!: ImagemSys;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
