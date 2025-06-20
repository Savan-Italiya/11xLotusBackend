import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateLeagueDto {
  @ApiProperty({ example: 1, description: 'Category ID for the league' })
  @IsNotEmpty()
  @IsNumber()
  category_id: number;

  @ApiProperty({ example: 'IPL', description: 'Title of the league' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: '2024-06-20T18:30:00.000Z', description: 'Match date' })
  @IsNotEmpty()
  @IsDateString()
  match_date: Date;
}
