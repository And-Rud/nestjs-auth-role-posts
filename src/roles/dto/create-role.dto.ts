import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'role of user' })
  readonly value: string;

  @ApiProperty({ example: 'User', description: 'description of role' })
  readonly description: string;
}
