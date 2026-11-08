export class Item {
  id: number;
  name: string;
  category: string;
  rarity: 'comun' | 'poco comun' | 'rara' | 'epica';
  description: string;
  stackSize: number;
}
