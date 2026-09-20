export class CreateMobDto {
  nombre: string;
  tipo: 'hostil' | 'neutral' | 'pasivo';
  aspectoYComportamiento: string;
  combateYDefensa: string[];
  drops: {
    item: string;
    probabilidad_default: number;
  }[];
}