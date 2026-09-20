export class Mob {
    id: number;
    nombre: string;
    tipo: 'hostil' | 'neutral' | 'pasivo';
    aspectoYComportamiento: string;
    combateYDefensa: string[];
    drops: {
        item: string;
        probabilidad_default: number;
  }[];
}
