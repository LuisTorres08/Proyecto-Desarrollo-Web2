import { Test, TestingModule } from '@nestjs/testing';
import { CoolartlyTypeService } from './coolartly-type.service';

describe('CoolartlyTypeService', () => {
  let service: CoolartlyTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoolartlyTypeService],
    }).compile();

    service = module.get<CoolartlyTypeService>(CoolartlyTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
