import { PartialType } from '@nestjs/mapped-types';
import { CreateCoolartlyTypeDto } from './create-coolartly-type.dto';

export class UpdateCoolartlyTypeDto extends PartialType(CreateCoolartlyTypeDto) {}
