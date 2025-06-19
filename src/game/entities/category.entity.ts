import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('categories')
export class Category {
  @ApiProperty({ example: 1, description: 'Primary key - Category ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 'Card Games', description: 'Name of the category' })
  @Column({ length: 255, unique: true })
  name: string;

  @ApiProperty({ example: 'All card-based games', description: 'Description of the category' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;
} 