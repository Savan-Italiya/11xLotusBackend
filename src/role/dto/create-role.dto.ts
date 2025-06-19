import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    example: 'SUPER_AGENT',
    description: 'Name of the role (must be unique)',
    enum: ['SUPER_AGENT', 'SUB_AGENT', 'SUB_ADMIN', 'USER']
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @ApiProperty({
    example: 'Super Agent role with highest level access',
    description: 'Description of the role'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;
}
