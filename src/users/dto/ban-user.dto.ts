import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'UserId' })
  readonly userId: number;

  @ApiProperty({ example: 'Spam', description: 'Reason of banning' })
  readonly banReason: string;
}
