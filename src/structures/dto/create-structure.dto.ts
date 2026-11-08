import { IsString, IsArray } from 'class-validator';

export class CreateStructureDto {
  @IsString()
  nombre: string;

  @IsString()
  dimension: string;

  @IsString()
  descripcion: string;

  @IsArray()
  @IsString({ each: true })
  mobsComunes: string[];

  @IsArray()
  @IsString({ each: true })
  botin: string[];
}
