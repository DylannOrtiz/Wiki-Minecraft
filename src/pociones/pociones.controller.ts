import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PocionesService } from './pociones.service';
import { CreatePocionDto } from './dto/create-pocion.dto';
import { UpdatePocionDto } from './dto/update-pocion.dto';

@Controller('pociones')
export class PocionesController {
  constructor(private readonly pocionesService: PocionesService) {}

  @Post()
  create(@Body() createPocionDto: CreatePocionDto) {
    return this.pocionesService.create(createPocionDto);
  }

  @Get()
  findAll() {
    return this.pocionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pocionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePocioneDto: UpdatePocionDto) {
    return this.pocionesService.update(+id, updatePocioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pocionesService.remove(+id);
  }
}
