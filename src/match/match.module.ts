import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Module } from '@nestjs/common';
import { League } from './entities/league.entity';
import { Match } from './entities/match.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { LeagueController } from './league.controller';
import { LeagueService } from './league.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([League, Category, Match]),
  ],
  controllers: [MatchController, CategoryController, LeagueController],
  providers: [MatchService, CategoryService, LeagueService],
})
export class MatchModule {}