import { Module } from '@nestjs/common';
import { PocionesService } from './pociones.service';
import { PocionesController } from './pociones.controller';

@Module({
  controllers: [PocionesController],
  providers: [PocionesService],
})
export class PocionesModule {}
