import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { Match } from './entities/match.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
  ) {}

  async create(createGameDto: CreateGameDto) {
    // Find the match by title
    const match = await this.matchRepository.findOne({ where: { title: createGameDto.match_title } });
    if (!match) throw new NotFoundException('Match not found');

    // Only set match_id, not match or matches
    const { match_title, ...rest } = createGameDto;
    const game = this.gameRepository.create({
      ...rest,
      match_id: match.id,
    });
    return this.gameRepository.save(game);
  }

  findAll() {
    return this.gameRepository.find({ relations: ['matches'] });
  }

  async findOne(id: string) {
    const game = await this.gameRepository.findOne({ where: { id }, relations: ['matches'] });
    if (!game) throw new NotFoundException('Game not found');
    return game;
  }

  async update(id: string, updateGameDto: UpdateGameDto) {
    const updateData: any = { ...updateGameDto };
    if (updateGameDto.match_title) {
      const match = await this.matchRepository.findOne({ where: { title: updateGameDto.match_title } });
      if (!match) throw new NotFoundException('Match not found');
      updateData.match_id = match.id;
      updateData.matches = match;
    }
    // Remove match_title from updateData so it doesn't try to update a non-existent column
    delete updateData.match_title;

    // Check if updateData has any updatable fields
    if (Object.keys(updateData).length === 0) {
      throw new BadRequestException('No valid fields provided for update');
    }

    await this.gameRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string) {
    const result = await this.gameRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Game not found');
    return { message: 'Game deleted successfully' };
  }
}