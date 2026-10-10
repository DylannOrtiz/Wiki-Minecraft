import { PartialType } from '@nestjs/mapped-types';
import { CreatePocionDto } from './create-pocion.dto';

export class UpdatePocionDto extends PartialType(CreatePocionDto) {}
