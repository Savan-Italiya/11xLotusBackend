import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateMatchDto {
  @ApiProperty({ example: 'Football', description: 'Name of the category' })
  @IsString()
  @IsNotEmpty()
  category_name: string;

  @ApiProperty({ example: 'India vs Australia', description: 'Title of the match' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '2024-06-10T14:00:00.000Z', description: 'Date of the match' })
  @IsDateString()
  match_date: string;
}