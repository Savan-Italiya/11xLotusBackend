import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateMatchDto {
  @ApiProperty({ example: 'Poker', description: 'Name of the game' })
  @IsString()
  name: string;

  @ApiProperty({ example: 1, description: 'League ID of the game' })
  @IsNumber()
  league_Id: number;

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
