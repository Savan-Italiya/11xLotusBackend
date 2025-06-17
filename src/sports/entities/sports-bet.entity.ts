import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/entities/user.entity';
import { Event } from './event.entity';

@Entity('sports_bets')
export class SportsBet {
  @ApiProperty({ example: 1, description: 'Primary key - Sports Bet ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 1, description: 'User ID who placed the bet' })
  @Column({ type: 'bigint' })
  user_id: number;

  @ApiProperty({ example: 1, description: 'Event ID for the bet' })
  @Column({ type: 'bigint' })
  event_id: number;

  @ApiProperty({ example: 'HOME', description: 'Selection for the bet' })
  @Column({ type: 'enum', enum: ['HOME', 'DRAW', 'AWAY', 'OVER', 'UNDER', 'YES', 'NO'] })
  selection: string;

  @ApiProperty({ example: 2.5, description: 'Odds at the time of bet' })
  @Column({ type: 'decimal', precision: 8, scale: 2 })
  odds: number;

  @ApiProperty({ example: 100.00, description: 'Amount of the bet' })
  @Column({ type: 'decimal', precision: 8, scale: 2 })
  bet_amount: number;

  @ApiProperty({ example: 250.00, description: 'Potential win amount' })
  @Column({ type: 'decimal', precision: 8, scale: 2 })
  win_amount: number;

  @ApiProperty({ example: 'PENDING', description: 'Status of the bet' })
  @Column({ type: 'enum', enum: ['PENDING', 'WON', 'LOST', 'CANCELLED'] })
  status: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Record update timestamp' })
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @ManyToOne(() => Event, event => event.bets)
  event: Event;
} 