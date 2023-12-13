import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'USER', description: 'Value of role' })
  @IsString({ message: 'Must be a string' })
  readonly value: string;

  @ApiProperty({ example: '1', description: 'UserId  of role' })
  @IsNumber({}, { message: 'Must be a number' })
  readonly userId: number;
}
