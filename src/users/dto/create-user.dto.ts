import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'Email adress' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Not correct email' })
  readonly email: string;

  @ApiProperty({ example: '12345', description: 'Password' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Must be < 4 and > 16' })
  readonly password: string;
}
