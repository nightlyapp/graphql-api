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
  HasOne,
} from "sequelize-typescript";
import { User } from "./user";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] },
  },
  paranoid: true,
  tableName: "imagensSys",
})
export class ImagemSys extends Model<ImagemSys> {
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
    type: DataType.INTEGER,
  })
  size!: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  key!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  url!: string;

  @HasOne(() => User)
  user!: User;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}
