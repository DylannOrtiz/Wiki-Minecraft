import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = [
    { id: 1, name: 'Pólvora', category: 'Material', rarity: 'comun', stackSize: 64, description: 'Polvo gris que sueltan creepers y ghasts. Sirve para fabricar TNT, fuegos artificiales y pociones arrojadizas.' },
    { id: 2, name: 'Lingote de hierro', category: 'Material', rarity: 'comun', stackSize: 64, description: 'Se obtiene fundiendo hierro en bruto. Es la base de herramientas, armaduras, raíles y cubos.' },
    { id: 3, name: 'Diamante', category: 'Material', rarity: 'rara', stackSize: 64, description: 'Gema muy resistente que se encuentra en lo profundo del mundo. Se usa para las mejores herramientas y armaduras.' },
    { id: 4, name: 'Perla de Ender', category: 'Material', rarity: 'poco comun', stackSize: 16, description: 'La sueltan los enderman. Al lanzarla te teletransporta, y sirve para fabricar ojos de Ender.' },
    { id: 5, name: 'Vara de Blaze', category: 'Material', rarity: 'poco comun', stackSize: 64, description: 'La sueltan los blaze del Nether. Se usa como combustible y para fabricar polvo de blaze y soportes de pociones.' },
    { id: 6, name: 'Lágrima de Ghast', category: 'Material', rarity: 'rara', stackSize: 64, description: 'La suelta el ghast. Es el ingrediente base de la poción de regeneración.' },
    { id: 7, name: 'Hueso', category: 'Material', rarity: 'comun', stackSize: 64, description: 'Lo sueltan los esqueletos. Se usa para domesticar lobos y fabricar harina de huesos.' },
    { id: 8, name: 'Hilo', category: 'Material', rarity: 'comun', stackSize: 64, description: 'Lo sueltan las arañas. Se usa para fabricar arcos, cañas de pescar y lana.' },
    { id: 9, name: 'Cuero', category: 'Material', rarity: 'comun', stackSize: 64, description: 'Lo sueltan vacas y otros animales. Sirve para armadura de cuero, libros y marcos.' },
    { id: 10, name: 'Lana', category: 'Material', rarity: 'comun', stackSize: 64, description: 'Se obtiene esquilando ovejas. Sirve para camas, alfombras y estandartes.' },
    { id: 11, name: 'Pluma', category: 'Material', rarity: 'comun', stackSize: 64, description: 'La sueltan las gallinas. Se usa para fabricar flechas.' },
    { id: 12, name: 'Bola de slime', category: 'Material', rarity: 'poco comun', stackSize: 64, description: 'La sueltan los slimes pequeños. Se usa para pistones pegajosos y bloques de slime.' },
    { id: 13, name: 'Carne podrida', category: 'Comida', rarity: 'comun', stackSize: 64, description: 'La suelta el zombi. Se puede comer, pero provoca hambre; es útil para curar lobos.' },
    { id: 14, name: 'Cabeza de Creeper', category: 'Decoración', rarity: 'epica', stackSize: 64, description: 'Se consigue cuando un creeper cargado mata a otro creeper. Es decorativa y se puede ponerse como casco.' },
  ];

  private nextId = 15;

  create(createItemDto: CreateItemDto): Item {
    const nuevoItem: Item = { id: this.nextId++, ...createItemDto };
    this.items.push(nuevoItem);
    return nuevoItem;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    const item = this.items.find((i) => i.id === id);
    if (!item) throw new NotFoundException(`Ítem con id ${id} no encontrado`);
    return item;
  }

  update(id: number, updateItemDto: UpdateItemDto): Item {
    const item = this.findOne(id);
    Object.assign(item, updateItemDto);
    return item;
  }

  remove(id: number): void {
    const item = this.findOne(id);
    this.items = this.items.filter((i) => i.id !== item.id);
  }
}
