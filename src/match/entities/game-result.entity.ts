import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Match } from './match.entity';

@Entity('game_results')
export class GameResult {
  @ApiProperty({ example: 1, description: 'Primary key - Game Result ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 'GAME001', description: 'Game ID for the result' })
  @Column({ type: 'bigint' })
  game_id: number;

  @ApiProperty({ example: '{"winner": "player1", "score": "21-15"}', description: 'Result data in JSON format' })
  @Column({ type: 'text' })
  result_data: string;

  @ApiProperty({ description: 'Time when the result was recorded' })
  @CreateDateColumn()
  result_time: Date;

  @ManyToOne(() => Match, match => match.id)
  match: Match;
} 