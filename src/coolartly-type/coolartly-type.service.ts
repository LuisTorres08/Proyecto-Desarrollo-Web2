import { Injectable } from '@nestjs/common';
import { CreateCoolartlyTypeDto } from './dto/create-coolartly-type.dto';
import { UpdateCoolartlyTypeDto } from './dto/update-coolartly-type.dto';

@Injectable()
export class CoolartlyTypeService {
  create(createCoolartlyTypeDto: CreateCoolartlyTypeDto) {
    return 'This action adds a new coolartlyType';
  }

  findAll() {
    return `This action returns all coolartlyType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coolartlyType`;
  }

  update(id: number, updateCoolartlyTypeDto: UpdateCoolartlyTypeDto) {
    return `This action updates a #${id} coolartlyType`;
  }

  remove(id: number) {
    return `This action removes a #${id} coolartlyType`;
  }
}
