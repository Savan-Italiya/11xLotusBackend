import { Test, TestingModule } from '@nestjs/testing';
import { BettingController } from './betting.controller';
import { BettingService } from './betting.service';

describe('BettingController', () => {
  let controller: BettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BettingController],
      providers: [BettingService],
    }).compile();

    controller = module.get<BettingController>(BettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
