import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MobsModule } from './mobs/mobs.module';
import { PocionesModule } from './pociones/pociones.module';
import { ItemsModule } from './items/items.module';
import { StructuresModule } from './structures/structures.module';

@Module({
  imports: [MobsModule, PocionesModule, ItemsModule, StructuresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
