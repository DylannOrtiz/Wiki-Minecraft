import { PartialType } from '@nestjs/mapped-types';
import { CreateMobDto } from './create-mob.dto';

export class UpdateMobDto extends PartialType(CreateMobDto) {}
