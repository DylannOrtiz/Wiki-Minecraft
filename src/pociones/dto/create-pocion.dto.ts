import {
  IsString,
  IsIn,
  IsArray,
  IsNumber,
  IsBoolean,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class VarianteDto {
  @IsString()
  nombre: string;

  @IsString()
  ingrediente: string;
}

export class CreatePocionDto {
  @IsString()
  nombre: string;

  @IsIn(['positivo', 'negativo'])
  efecto: 'positivo' | 'negativo';

  @IsString()
  descripcion: string;

  @IsString()
  efectoYUso: string;

  @IsString()
  ingredienteBase: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VarianteDto)
  variantes: VarianteDto[];

  @IsString()
  rareza: string;

  @IsNumber()
  @Min(0)
  tiempoConsumo: number;

  @IsBoolean()
  consumible: boolean;

  @IsBoolean()
  renovable: boolean;
}
