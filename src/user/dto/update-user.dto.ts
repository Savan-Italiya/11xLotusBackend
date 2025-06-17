import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, MinLength, IsBoolean, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'Username of the user' })
  @IsString()
  @IsOptional()
  username?: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email of the user' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ example: '+1234567890', description: 'Mobile number of the user' })
  @IsString()
  @IsOptional()
  mobile_number?: string;

  @ApiProperty({ example: 'password123', description: 'Password of the user' })
  @IsString()
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiProperty({ example: 1000.00, description: 'Balance of the user' })
  @IsNumber()
  @IsOptional()
  balance?: number;

  @ApiProperty({ example: true, description: 'Whether the user is active' })
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @ApiProperty({ example: 1, description: 'Role ID of the user' })
  @IsNumber()
  @IsOptional()
  role_id?: number;
}
