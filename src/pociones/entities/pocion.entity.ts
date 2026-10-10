export class Pocion {
  id: number;
  nombre: string;
  efecto: 'positivo' | 'negativo';
  descripcion: string;
  efectoYUso: string;
  ingredienteBase: string;
  variantes: {
    nombre: string;
    ingrediente: string;
  }[];
  rareza: string;
  tiempoConsumo: number;
  consumible: boolean;
  renovable: boolean;
}
