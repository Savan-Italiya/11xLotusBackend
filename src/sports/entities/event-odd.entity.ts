import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Event } from './event.entity';

@Entity('event_odds')
export class EventOdd {
  @ApiProperty({ example: 1, description: 'Primary key - Event Odd ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 1, description: 'Event ID for the odd' })
  @Column({ type: 'bigint' })
  event_id: number;

  @ApiProperty({ example: 'MATCH_WINNER', description: 'Type of market' })
  @Column({ type: 'enum', enum: ['MATCH_WINNER', 'OVER_UNDER', 'BOTH_TEAMS_TO_SCORE'] })
  market_type: string;

  @ApiProperty({ example: 'HOME', description: 'Selection for the odd' })
  @Column({ type: 'enum', enum: ['HOME', 'DRAW', 'AWAY', 'OVER', 'UNDER', 'YES', 'NO'] })
  selection: string;

  @ApiProperty({ example: 2.5, description: 'Odds value' })
  @Column({ type: 'decimal', precision: 8, scale: 2 })
  odds: number;

  @ApiProperty({ example: true, description: 'Whether the odd is active' })
  @Column()
  is_active: boolean;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Record update timestamp' })
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Event, event => event.odds)
  event: Event;
} 