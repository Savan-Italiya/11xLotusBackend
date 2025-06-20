import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { Module } from '@nestjs/common';
import { Game } from './entities/game.entity';
import { Match } from './entities/match.entity';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Game, Match, Category]),
  ],
  controllers: [GameController, CategoryController, MatchController],
  providers: [GameService, CategoryService, MatchService],
})
export class GameModule {}