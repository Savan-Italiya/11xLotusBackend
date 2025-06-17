import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Game } from './game.entity';

@Entity('Game Rules')
export class GameRule {
  @ApiProperty({ example: 1, description: 'Primary key - Game Rule ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 'GAME001', description: 'Game ID for the rule' })
  @Column({ type: 'bigint' })
  game_id: number;

  @ApiProperty({ example: 'Players must be 18 or older', description: 'Rule text' })
  @Column({ type: 'text' })
  rule_text: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Record update timestamp' })
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Game, game => game.rules)
  game: Game;
} 