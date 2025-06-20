import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(data: Partial<Category>): Promise<Category> {
    const existing = await this.categoryRepository.findOne({ where: { name: data.name } });
    if (existing) {
      throw new BadRequestException('Category with this name already exists');
    }
    const category = this.categoryRepository.create(data);
    return this.categoryRepository.save(category);
  }
}