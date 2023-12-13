import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Title', description: 'title of post' })
  readonly title: string;

  @ApiProperty({ example: 'Content', description: 'content of post' })
  readonly content: string;

  @ApiProperty({ example: '1', description: 'UserId' })
  readonly userId: number;
}
