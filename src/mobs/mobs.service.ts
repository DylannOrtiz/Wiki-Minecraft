import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMobDto } from './dto/create-mob.dto';
import { UpdateMobDto } from './dto/update-mob.dto';
import { Mob } from './entities/mob.entity';

@Injectable()
export class MobsService {
  private mobs: Mob[] = [
    {
      id: 1,
      nombre: 'Creeper',
      tipo: 'hostil',
      aspectoYComportamiento:
        'Criatura verde que explota al acercarse al jugador.',
      combateYDefensa: ['Espada', 'Arco', 'Gato (los ahuyenta)'],
      drops: [
        { item: 'Pólvora', probabilidad_default: 66 },
        { item: 'Cabeza de Creeper', probabilidad_default: 100 },
      ],
    },
  ];

  private nextId = 2;

  create(createMobDto: CreateMobDto): Mob {
    const nuevoMob: Mob = { id: this.nextId++, ...createMobDto };
    this.mobs.push(nuevoMob);
    return nuevoMob;
  }

  findAll(): Mob[] {
    return this.mobs;
  }

  findOne(id: number): Mob {
    const mob = this.mobs.find((m) => m.id === id);
    if (!mob) throw new NotFoundException(`Mob con id ${id} no encontrado`);
    return mob;
  }

  update(id: number, updateMobDto: UpdateMobDto): Mob {
    const mob = this.findOne(id);
    Object.assign(mob, updateMobDto);
    return mob;
  }

  remove(id: number): void {
    const mob = this.findOne(id);
    this.mobs = this.mobs.filter((m) => m.id !== mob.id);
  }
}