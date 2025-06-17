import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('User Activity Log')
export class UserActivityLog {
  @ApiProperty({ example: 1, description: 'Primary key - Activity Log ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 1, description: 'User ID for the activity' })
  @Column({ type: 'bigint' })
  user_id: number;

  @ApiProperty({ example: 'LOGIN', description: 'Type of activity' })
  @Column({ type: 'enum', enum: ['LOGIN', 'LOGOUT', 'BET_PLACED', 'WITHDRAWAL', 'DEPOSIT'] })
  activity_type: string;

  @ApiProperty({ example: '{"ip": "192.168.1.1", "device": "mobile"}', description: 'Activity metadata in JSON format' })
  @Column({ type: 'json' })
  metadata: object;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, user => user.id)
  user: User;
} 