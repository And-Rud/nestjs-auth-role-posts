import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

interface PostCreateionAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

//другим дженеріком вказуєм які поля необхідні для створення обєкта
@Table({ tableName: 'posts' })
export class Posts extends Model<User, PostCreateionAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Title', description: 'Title of post' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'Content', description: 'Content of post' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  @ApiProperty({ example: 'image.jpg', description: 'image' })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ApiProperty({ example: '1', description: 'Id of user' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
