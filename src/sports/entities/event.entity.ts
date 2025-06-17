import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { League } from './league.entity';
import { EventOdd } from './event-odd.entity';
import { SportsBet } from './sports-bet.entity';

@Entity('events')
export class Event {
  @ApiProperty({ example: 1, description: 'Primary key - Event ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 'Manchester United vs Liverpool', description: 'Name of the event' })
  @Column({ length: 255 })
  name: string;

  @ApiProperty({ example: '2024-03-20T15:00:00Z', description: 'Start time of the event' })
  @Column({ type: 'timestamp' })
  start_time: Date;

  @ApiProperty({ example: '2024-03-20T17:00:00Z', description: 'End time of the event' })
  @Column({ type: 'timestamp' })
  end_time: Date;

  @ApiProperty({ example: 'ACTIVE', description: 'Status of the event' })
  @Column({ length: 50 })
  status: string;

  @ApiProperty({ example: 1, description: 'League ID' })
  @Column({ type: 'bigint' })
  league_id: number;

  @ManyToOne(() => League, league => league.events)
  league: League;

  @OneToMany(() => EventOdd, odd => odd.event)
  odds: EventOdd[];

  @OneToMany(() => SportsBet, bet => bet.event)
  bets: SportsBet[];

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Record update timestamp' })
  @UpdateDateColumn()
  updated_at: Date;
} 