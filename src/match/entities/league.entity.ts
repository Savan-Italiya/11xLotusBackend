import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from './category.entity';

@Entity('league')
export class League {
  @ApiProperty({ example: 1, description: 'Primary key - matches ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 1, description: 'category ID for the Matches' })
  @Column({ type: 'bigint' })
  category_id: number;

  @ApiProperty({ example: 'matches', description: 'title of the matches' })
  @Column({ type: 'text' })
  title: string;

  @ApiProperty({ description: 'timestamp' })
  @CreateDateColumn()
  match_date: Date;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Category, category => category.id )
  category: Category;
}