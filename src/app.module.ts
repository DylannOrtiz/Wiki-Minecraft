import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MobsModule } from './mobs/mobs.module';
import { PocionesModule } from './pociones/pociones.module';

@Module({
  imports: [MobsModule, PocionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
