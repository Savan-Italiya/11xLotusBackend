import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/entities/user.entity';

@Entity('Wallet')
export class Wallet {
  @ApiProperty({ example: 1, description: 'Primary key - Wallet ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 1, description: 'User ID for the wallet' })
  @Column({ type: 'bigint' })
  user_id: number;

  @ApiProperty({ example: 1000.00, description: 'Wallet balance' })
  @Column({ type: 'decimal', precision: 8, scale: 2 })
  balance: number;

  @ApiProperty({ example: 'USD', description: 'Currency of the wallet' })
  @Column({ length: 255 })
  currency: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Record update timestamp' })
  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => User, user => user.id)
  user: User;
}
