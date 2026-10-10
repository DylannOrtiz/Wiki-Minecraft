import { Test, TestingModule } from '@nestjs/testing';
import { PocionesController } from './pociones.controller';
import { PocionesService } from './pociones.service';

describe('PocionesController', () => {
  let controller: PocionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PocionesController],
      providers: [PocionesService],
    }).compile();

    controller = module.get<PocionesController>(PocionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
