import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './entities/match.entity';
import { Category } from './entities/category.entity';
import { CreateMatchDto } from './dto/create-match.dto'; // <-- Use the correct DTO

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async createMatch(dto: CreateMatchDto): Promise<Match> {
    // Find the category by name
    const category = await this.categoryRepository.findOne({ where: { name: dto.category_name } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    // Create the match
    const match = this.matchRepository.create({
      category_id: category.id,
      title: dto.title,
      match_date: new Date(dto.match_date), // Convert string to Date
    });
    return this.matchRepository.save(match);
  }
}