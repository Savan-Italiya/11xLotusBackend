import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { League } from './league.entity';

@Entity('match')
export class Match {
    @ApiProperty({ example: 'GAME001', description: 'Primary key - Game ID' })
    @PrimaryColumn({ length: 255 })
    id: string;

    @ApiProperty({ example: 'Poker', description: 'Name of the game' })
    @Column({ length: 255 })
    name: string;

    @ApiProperty({ example: 1, description: 'Category ID of the game' })
    @Column()
    league_Id: number;

    @ApiProperty({ example: true, description: 'Whether the game is live' })
    @Column()
    is_live: boolean;

    @ApiProperty({ example: 'game-image.jpg', description: 'Image URL of the game' })
    @Column({ length: 255 })
    image: string;

    @ApiProperty({ example: 'A classic poker game', description: 'Description of the game' })
    @Column({ length: 255 })
    description: string;

    @ApiProperty({ example: 'game-thumbnail.jpg', description: 'Thumbnail URL of the game' })
    @Column({ length: 255 })
    thumbnail: string;

    @ApiProperty({ description: 'Record creation timestamp' })
    @CreateDateColumn()
    created_at: Date;

    @ApiProperty({ description: 'Record update timestamp' })
    @UpdateDateColumn()
    modified_at: Date;

    @OneToOne(() => League, league => league.id)
    league: League;
}
