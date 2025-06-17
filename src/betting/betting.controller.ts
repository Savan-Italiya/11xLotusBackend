import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BettingService } from './betting.service';
import { CreateBettingDto } from './dto/create-betting.dto';
import { UpdateBettingDto } from './dto/update-betting.dto';

@Controller('betting')
export class BettingController {
  constructor(private readonly bettingService: BettingService) {}

  @Post()
  create(@Body() createBettingDto: CreateBettingDto) {
    return this.bettingService.create(createBettingDto);
  }

  @Get()
  findAll() {
    return this.bettingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bettingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBettingDto: UpdateBettingDto) {
    return this.bettingService.update(+id, updateBettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bettingService.remove(+id);
  }
}
