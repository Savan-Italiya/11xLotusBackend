import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { League } from './entities/league.entity';
import { CreateLeagueDto } from './dto/create-league.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(League)
    private leagueRepository: Repository<League>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createLeagueDto: CreateLeagueDto): Promise<League> {
    const category = await this.categoryRepository.findOne({
      where: { id: createLeagueDto.category_id },
    });

    if (!category) {
      throw new BadRequestException('Invalid category_id: Category does not exist');
    }

    const league = this.leagueRepository.create(createLeagueDto);
    return this.leagueRepository.save(league);
  }

  async findAll(): Promise<League[]> {
    return this.leagueRepository.find();
  }

  async findOne(id: number): Promise<League> {
    const league = await this.leagueRepository.findOne({ where: { id } });
    if (!league) throw new NotFoundException('League not found');
    return league;
  }


  async remove(id: number): Promise<void> {
    const league = await this.findOne(id);
    await this.leagueRepository.remove(league);
  }
}