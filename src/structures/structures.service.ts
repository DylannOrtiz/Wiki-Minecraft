import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStructureDto } from './dto/create-structure.dto';
import { UpdateStructureDto } from './dto/update-structure.dto';
import { Structure } from './entities/structure.entity';

@Injectable()
export class StructuresService {
  private structures: Structure[] = [
    { id: 1, nombre: 'Aldea', dimension: 'Mundo principal', descripcion: 'Asentamiento de aldeanos con casas, granjas y una campana. Permite comerciar y suele estar protegido por golems de hierro.', mobsComunes: ['Aldeano', 'Golem de hierro', 'Zombi (de noche)'], botin: ['Pan', 'Zanahoria', 'Patata', 'Lingote de hierro'] },
    { id: 2, nombre: 'Fortaleza del Nether', dimension: 'Nether', descripcion: 'Gran estructura de ladrillos del Nether con puentes, pasillos y salas. Es el único lugar donde aparecen blaze.', mobsComunes: ['Blaze', 'Esqueleto del wither', 'Zombi piglin'], botin: ['Vara de Blaze', 'Cráneo de esqueleto del wither', 'Diamante', 'Lingote de oro'] },
    { id: 3, nombre: 'Templo del desierto', dimension: 'Mundo principal', descripcion: 'Pirámide de arenisca con una sala del tesoro oculta bajo una placa de presión con TNT.', mobsComunes: ['Husk'], botin: ['Diamante', 'Esmeralda', 'Hueso', 'Pólvora'] },
    { id: 4, nombre: 'Mansión del bosque', dimension: 'Mundo principal', descripcion: 'Enorme casa en un bosque oscuro, habitada por illagers. Contiene muchas habitaciones y salas secretas.', mobsComunes: ['Evocador', 'Vindicador', 'Allay (en jaulas)'], botin: ['Tótem de la inmortalidad', 'Diamante', 'Libro encantado'] },
    { id: 5, nombre: 'Fortaleza', dimension: 'Mundo principal', descripcion: 'Estructura subterránea de piedra que contiene el portal al End. Se localiza lanzando ojos de Ender.', mobsComunes: ['Pez plateado', 'Esqueleto', 'Zombi'], botin: ['Manzana dorada', 'Perla de Ender', 'Lingote de hierro', 'Diamante'] },
    { id: 6, nombre: 'Monumento oceánico', dimension: 'Mundo principal', descripcion: 'Estructura submarina de prismarina vigilada por guardianes. Tiene una sala del tesoro con bloques de oro.', mobsComunes: ['Guardián', 'Guardián anciano'], botin: ['Bloque de oro', 'Esponja', 'Fragmento de prismarina'] },
    { id: 7, nombre: 'Bastión', dimension: 'Nether', descripcion: 'Fortaleza de piglins hecha de piedra negra. Tiene varios tipos de salas con cofres con botín valioso.', mobsComunes: ['Piglin', 'Piglin bruto', 'Hoglin'], botin: ['Lingote de oro', 'Netherite (antiguos escombros)', 'Armadura de oro'] },
    { id: 8, nombre: 'Ciudad antigua', dimension: 'Mundo principal', descripcion: 'Estructura enorme y oscura en lo profundo del mundo. Es el hogar del warden y contiene botines raros.', mobsComunes: ['Warden'], botin: ['Libro encantado', 'Diamante', 'Pantalones de rapiña'] },
  ];

  private nextId = 9;

  create(createStructureDto: CreateStructureDto): Structure {
    const nuevaEstructura: Structure = { id: this.nextId++, ...createStructureDto };
    this.structures.push(nuevaEstructura);
    return nuevaEstructura;
  }

  findAll(): Structure[] {
    return this.structures;
  }

  findOne(id: number): Structure {
    const estructura = this.structures.find((s) => s.id === id);
    if (!estructura) throw new NotFoundException(`Estructura con id ${id} no encontrada`);
    return estructura;
  }

  update(id: number, updateStructureDto: UpdateStructureDto): Structure {
    const estructura = this.findOne(id);
    Object.assign(estructura, updateStructureDto);
    return estructura;
  }

  remove(id: number): void {
    const estructura = this.findOne(id);
    this.structures = this.structures.filter((s) => s.id !== estructura.id);
  }
}
