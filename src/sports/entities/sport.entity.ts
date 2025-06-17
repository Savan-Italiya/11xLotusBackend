import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { League } from './league.entity';

@Entity('sports')
export class Sport {
  @ApiProperty({ example: 1, description: 'Primary key - Sport ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 'Football', description: 'Name of the sport' })
  @Column({ length: 255 })
  name: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Record update timestamp' })
  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => League, league => league.sport)
  leagues: League[];
}
