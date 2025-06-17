import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Sport } from './sport.entity';
import { Event } from './event.entity';

@Entity('leagues')
export class League {
  @ApiProperty({ example: 1, description: 'Primary key - League ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 1, description: 'Sport ID for the league' })
  @Column({ type: 'bigint' })
  sport_id: number;

  @ApiProperty({ example: 'Premier League', description: 'Name of the league' })
  @Column({ length: 255 })
  name: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Record update timestamp' })
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Sport, sport => sport.leagues)
  sport: Sport;

  @OneToMany(() => Event, event => event.league)
  events: Event[];
} 