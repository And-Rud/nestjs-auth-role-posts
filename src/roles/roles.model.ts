import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsToMany,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { UserRoles } from './user-roles.model';

interface RoleCreateionAttrs {
  value: string;
  description: string;
}

//другим дженеріком вказуєм які поля необхідні для створення обєкта
@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreateionAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Role of user' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({ example: 'Administrator', description: 'Description of role' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  user: User[];
}
