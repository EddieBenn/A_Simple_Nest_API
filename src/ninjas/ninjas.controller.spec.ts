import { Test, TestingModule } from '@nestjs/testing';
import { NinjasController } from './ninjas.controller';
import { NinjasService } from './ninjas.service';

describe('NinjasController', () => {
  let controller: NinjasController;
  let service: NinjasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NinjasController],
      providers: [NinjasService],
    }).compile();

    controller = module.get<NinjasController>(NinjasController);
    service = module.get<NinjasService>(NinjasService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
