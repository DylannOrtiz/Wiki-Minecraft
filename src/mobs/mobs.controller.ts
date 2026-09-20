import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MobsService } from './mobs.service';
import { CreateMobDto } from './dto/create-mob.dto';
import { UpdateMobDto } from './dto/update-mob.dto';

@Controller('mobs')
export class MobsController {
  constructor(private readonly mobsService: MobsService) {}

  @Post()
  create(@Body() createMobDto: CreateMobDto) {
    return this.mobsService.create(createMobDto);
  }

  @Get()
  findAll() {
    return this.mobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mobsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMobDto: UpdateMobDto) {
    return this.mobsService.update(+id, updateMobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mobsService.remove(+id);
  }
}
