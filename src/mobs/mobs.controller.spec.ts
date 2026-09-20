import { Test, TestingModule } from '@nestjs/testing';
import { MobsController } from './mobs.controller';
import { MobsService } from './mobs.service';

describe('MobsController', () => {
  let controller: MobsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobsController],
      providers: [MobsService],
    }).compile();

    controller = module.get<MobsController>(MobsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
