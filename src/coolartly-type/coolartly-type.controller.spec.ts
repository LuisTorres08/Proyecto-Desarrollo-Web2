import { Test, TestingModule } from '@nestjs/testing';
import { CoolartlyTypeController } from './coolartly-type.controller';
import { CoolartlyTypeService } from './coolartly-type.service';

describe('CoolartlyTypeController', () => {
  let controller: CoolartlyTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoolartlyTypeController],
      providers: [CoolartlyTypeService],
    }).compile();

    controller = module.get<CoolartlyTypeController>(CoolartlyTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
