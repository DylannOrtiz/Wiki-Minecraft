import { Test, TestingModule } from '@nestjs/testing';
import { PocionesService } from './pociones.service';

describe('PocionesService', () => {
  let service: PocionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PocionesService],
    }).compile();

    service = module.get<PocionesService>(PocionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
