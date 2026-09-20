import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MobsModule } from './mobs/mobs.module';

@Module({
  imports: [MobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
