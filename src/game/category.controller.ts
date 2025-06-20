import { Controller, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() body: Partial<Category>): Promise<Category> {
    return this.categoryService.create(body);
  }
}