import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePocionDto } from './dto/create-pocion.dto';
import { UpdatePocionDto } from './dto/update-pocion.dto';
import { Pocion } from './entities/pocion.entity';

@Injectable()
export class PocionesService {
  private pociones: Pocion[] = [
    {
      id: 1,
      nombre: 'Poción de regeneración',
      efecto: 'positivo',
      descripcion: 'Destila la fuerza vital del mundo para reparar heridas profundas.',
      efectoYUso: 'Restaura la salud del jugador de forma progresiva al consumirla.',
      ingredienteBase: 'Lágrima de Ghast',
      variantes: [
        { nombre: 'Poción de regeneración +', ingrediente: 'Polvo de redstone' },
        { nombre: 'Poción de regeneración II', ingrediente: 'Polvo de piedra luminosa' },
        { nombre: 'Poción de regeneración arrojadiza', ingrediente: 'Pólvora' },
        { nombre: 'Poción de regeneración persistente', ingrediente: 'Aliento de dragón' },
      ],
      rareza: 'Común',
      tiempoConsumo: 1.6,
      consumible: true,
      renovable: true,
    },
  ];

  private nextId = 2;

  create(createPocionDto: CreatePocionDto): Pocion {
    const nuevaPocion: Pocion = { id: this.nextId++, ...createPocionDto };
    this.pociones.push(nuevaPocion);
    return nuevaPocion;
  }

  findAll(): Pocion[] {
    return this.pociones;
  }

  findOne(id: number): Pocion {
    const pocion = this.pociones.find((p) => p.id === id);
    if (!pocion) throw new NotFoundException(`Poción con id ${id} no encontrada`);
    return pocion;
  }

  update(id: number, updatePocionDto: UpdatePocionDto): Pocion {
    const pocion = this.findOne(id);
    Object.assign(pocion, updatePocionDto);
    return pocion;
  }

  remove(id: number): void {
    const pocion = this.findOne(id);
    this.pociones = this.pociones.filter((p) => p.id !== pocion.id);
  }
}