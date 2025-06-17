import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/entities/user.entity';

@Entity('transactions')
export class Transaction {
  @ApiProperty({ example: 1, description: 'Primary key - Transaction ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 1, description: 'User ID for the transaction' })
  @Column({ type: 'bigint' })
  user_id: number;

  @ApiProperty({ example: 'DEPOSIT', description: 'Type of transaction' })
  @Column({ type: 'enum', enum: ['DEPOSIT', 'WITHDRAWAL', 'BET', 'WIN'] })
  transaction_type: string;

  @ApiProperty({ example: 100.00, description: 'Amount of the transaction' })
  @Column({ type: 'decimal', precision: 8, scale: 2 })
  amount: number;

  @ApiProperty({ example: 'COMPLETED', description: 'Status of the transaction' })
  @Column({ type: 'enum', enum: ['PENDING', 'COMPLETED', 'FAILED', 'CANCELLED'] })
  status: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, user => user.id)
  user: User;
} 