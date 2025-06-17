import { Module } from '@nestjs/common';
import { BettingService } from './betting.service';
import { BettingController } from './betting.controller';

@Module({
  controllers: [BettingController],
  providers: [BettingService],
})
export class BettingModule {}
