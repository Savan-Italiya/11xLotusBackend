import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('categorie')
export class Category {
  @ApiProperty({ example: 1, description: 'Primary key - Category ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 'Cricket', description: 'Name of the category' })
  @Column({ length: 255, unique: true })
  name: string;

  @ApiProperty({ example: 'All cricket matches', description: 'Description of the category' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;
} 