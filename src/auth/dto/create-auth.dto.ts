import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional, IsNumber, MinLength } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'johndoe' })
  @IsString()
  username: string;

  @ApiProperty({ example: '1234567890' })
  @IsString()
  mobile_number: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(6)
  password: string;

  // @ApiProperty({ example: 'John Doe' })
  // @IsString()
  // full_name: string;

  @ApiProperty({ example: 1, description: 'Role ID (1: SuperAgent, 2: SubAgent, 3: SubAdmin, 4: Normal User)' })
  @IsOptional()
  @IsNumber()
  role_id?: number;

  @ApiProperty({ example: 1000, description: 'Initial balance for agents' })
  @IsOptional()
  @IsNumber()
  initial_balance?: number;

  @ApiProperty({ example: 1, description: 'Parent agent ID for sub-agents' })
  @IsOptional()
  @IsNumber()
  parent_agent_id?: number;
}
