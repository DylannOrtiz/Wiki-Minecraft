import { Injectable } from '@nestjs/common';          
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
      aspectoYComportamiento: 'Criatura verde que explota al acercarse al jugador.',    
      combateYDefensa: ['Espada', 'Arco', 'Gato (los ahuyenta)'],
      drops: [
        { item: 'Pólvora', probabilidad_default: 66 },
        { item: 'Cabeza de Creeper', probabilidad_default: 100 },
      ],
    },
  ];

  create(createMobDto: CreateMobDto): Mob {             
    const nuevoMob: Mob = {
      id: this.mobs.length + 1, ...createMobDto,
    };
    this.mobs.push(nuevoMob);
    return nuevoMob;
  }

  findAll() {
    return this.mobs;
  }

  findOne(id: number): Mob | undefined {
    return this.mobs.find((mob) => mob.id === id);
  }

  update(id: number, updateMobDto: UpdateMobDto): Mob | undefined {    
    const mob = this.findOne(id);
    if (!mob) return undefined;
    Object.assign(mob, updateMobDto);
    return mob
  }

  remove(id: number): void {                               
    this.mobs = this.mobs.filter((mob) => mob.id !== id);   //para borrar un mob en especifico sin borrar los otros
  }
}
