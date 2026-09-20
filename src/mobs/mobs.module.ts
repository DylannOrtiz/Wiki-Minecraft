import { Module } from '@nestjs/common';
import { MobsService } from './mobs.service';
import { MobsController } from './mobs.controller';

@Module({
  controllers: [MobsController],
  providers: [MobsService],
})
export class MobsModule {}
