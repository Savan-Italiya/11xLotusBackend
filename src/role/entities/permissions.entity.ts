import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity('permissions')
export class Permission {
  @ApiProperty({ example: 1, description: 'Primary key - Permission ID' })
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ApiProperty({ example: 'CREATE_USER', description: 'Name of the permission' })
  @Column({ length: 255, unique: true })
  name: string;

  @ApiProperty({ description: 'Record creation timestamp' })
  @CreateDateColumn()
  created_at: Date;

  // @ManyToMany(() => Role, (role) => role.permissions)
  // roles: Role[];
}