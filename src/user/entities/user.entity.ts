import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../role/entities/role.entity';


@Entity('users')
export class User {
  @ApiProperty({ example: 1, description: 'Primary key - User ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 'john_doe', description: 'Username of the user' })
  @Column({ length: 255, unique: true, nullable: true })
  username: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email of the user' })
  @Column({ length: 255, unique: true })
  email: string;

  @ApiProperty({ example: '+1234567890', description: 'Mobile number of the user' })
  @Column({ length: 255, unique: true })
  mobile_number: string;

  @ApiProperty({ example: 'hashedPassword123', description: 'Hashed password of the user' })
  @Column({ length: 255 })
  password: string;

  @ApiProperty({ example: 1000.00, description: 'User balance' })
  @Column({ type: 'decimal', precision: 8, scale: 2 })
  balance: number;

  @ApiProperty({ example: true, description: 'Whether the user is active' })
  @Column()
  is_active: boolean;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Record update timestamp' })
  @UpdateDateColumn()
  updated_at: Date;

  @ApiProperty({ example: 1, description: 'Role ID of the user' })
  @Column({ type: 'bigint' })
  role_id: number;

  @OneToOne(() => Role, role => role.id)
  role: Role;

}
