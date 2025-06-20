import { Controller, Post, Body } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CategoryService } from './category.service';


@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() body: Partial<Category>): Promise<Category> {
    return this.categoryService.create(body);
  }
}