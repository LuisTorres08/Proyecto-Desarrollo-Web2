import { Module } from '@nestjs/common';
import { CoolartlyTypeService } from './coolartly-type.service';
import { CoolartlyTypeController } from './coolartly-type.controller';

@Module({
  controllers: [CoolartlyTypeController],
  providers: [CoolartlyTypeService]
})
export class CoolartlyTypeModule {}
