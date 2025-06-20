import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Match } from './match.entity';


@Entity('states')
export class State {
  @ApiProperty({ example: 'GAME001', description: 'Primary key - ID' })
  @PrimaryColumn({ length: 255 })
  id: string;

  @ApiProperty({ example: 1, description: 'game ID of the game' })
  @Column()
  match_id: number;

  @ApiProperty({ example: true, description: '' })
  @Column()
  state_name: string;

  @ApiProperty({ example: 'true', description: '' })
  @Column({ length: 255 })
  status: boolean;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Match, match => match.id)
  match: Match;
}
