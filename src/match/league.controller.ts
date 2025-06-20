import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateLeagueDto } from './dto/create-league.dto';
import { LeagueService } from './league.service';

@Controller('leagues')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Post()
  create(@Body() createLeagueDto: CreateLeagueDto) {
    return this.leagueService.create(createLeagueDto);
  }

  @Get()
  findAll() {
    return this.leagueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leagueService.findOne(+id);
  }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateLeagueDto: UpdateLeagueDto) {
//     return this.leagueService.update(+id, updateLeagueDto);
//   }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leagueService.remove(+id);
  }
}
