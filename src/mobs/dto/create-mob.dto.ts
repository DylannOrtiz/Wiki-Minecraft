import {
  IsString,
  IsIn,
  IsArray,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class DropDto {
  @IsString()
  item: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  probabilidad_default: number;
}

export class CreateMobDto {
  @IsString()
  nombre: string;

  @IsIn(['hostil', 'neutral', 'pasivo'])
  tipo: 'hostil' | 'neutral' | 'pasivo';

  @IsString()
  aspectoYComportamiento: string;

  @IsArray()
  @IsString({ each: true })
  combateYDefensa: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DropDto)
  drops: DropDto[];
}