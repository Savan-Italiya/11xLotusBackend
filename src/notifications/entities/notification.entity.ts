import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/entities/user.entity';
import { Match } from 'src/match/entities/match.entity';

@Entity('notifications')
export class Notification {
  @ApiProperty({ example: 1, description: 'Primary key - Notification ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 1, description: 'User ID for the notification' })
  @Column({ type: 'bigint' })
  user_id: number;

  @ApiProperty({ example: 'BET_RESULT', description: 'Type of notification' })
  @Column({ type: 'enum', enum: ['BET_RESULT', 'SYSTEM', 'PROMOTION', 'GAME_UPDATE'] })
  type: string;

  @ApiProperty({ example: 'Bet Result', description: 'Title of the notification' })
  @Column({ length: 255 })
  title: string;

  @ApiProperty({ example: 'Your bet has been won!', description: 'Message content' })
  @Column({ type: 'text' })
  message: string;

  @ApiProperty({ example: false, description: 'Whether the notification has been read' })
  @Column()
  is_read: boolean;

  @ApiProperty({ example: 'GAME001', description: 'Game ID related to the notification' })
  @Column({ type: 'bigint' })
  game_id: number;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @ManyToOne(() => Match, match => match.id)
  match: Match;
} 