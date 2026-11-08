import { IsString, IsIn, IsInt, Min, Max } from 'class-validator';

export class CreateItemDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsIn(['comun', 'poco comun', 'rara', 'epica'])
  rarity: 'comun' | 'poco comun' | 'rara' | 'epica';

  @IsString()
  description: string;

  @IsInt()
  @Min(1)
  @Max(64)
  stackSize: number;
}
