import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateGameDto {
  @ApiProperty({ example: 'GAME001', description: 'Primary key - Game ID' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ example: 'Poker', description: 'Name of the game' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'India vs Australia', description: 'Title of the match' })
  @IsString()
  @IsNotEmpty()
  match_title: string;

  @ApiProperty({ example: true, description: 'Whether the game is live' })
  @IsBoolean()
  is_live: boolean;

  @ApiProperty({ example: 'game-image.jpg', description: 'Image URL of the game' })
  @IsString()
  image: string;

  @ApiProperty({ example: 'A classic poker game', description: 'Description of the game' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'game-thumbnail.jpg', description: 'Thumbnail URL of the game' })
  @IsString()
  thumbnail: string;
}