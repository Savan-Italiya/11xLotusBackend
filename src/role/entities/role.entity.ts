import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinTable,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Permission } from './permissions.entity';

@Entity('role')
export class Role {
  @ApiProperty({ example: 1, description: 'Primary key - Role ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Name of the role' })
  @Column({ length: 255, unique: true })
  name: string;

  @ApiProperty({ example: 'Administrator role with full access', description: 'Description of the role' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  @JoinTable({
    name: 'role_permission',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id',
    },
  })
  permissions: Permission[];
}
