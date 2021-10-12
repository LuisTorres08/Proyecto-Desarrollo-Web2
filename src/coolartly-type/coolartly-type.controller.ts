import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoolartlyTypeService } from './coolartly-type.service';
import { CreateCoolartlyTypeDto } from './dto/create-coolartly-type.dto';
import { UpdateCoolartlyTypeDto } from './dto/update-coolartly-type.dto';

@Controller('coolartly-type')
export class CoolartlyTypeController {
  constructor(private readonly coolartlyTypeService: CoolartlyTypeService) {}

  @Post()
  create(@Body() createCoolartlyTypeDto: CreateCoolartlyTypeDto) {
    return this.coolartlyTypeService.create(createCoolartlyTypeDto);
  }

  @Get()
  findAll() {
    return this.coolartlyTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coolartlyTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoolartlyTypeDto: UpdateCoolartlyTypeDto) {
    return this.coolartlyTypeService.update(+id, updateCoolartlyTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coolartlyTypeService.remove(+id);
  }
}
