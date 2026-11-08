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
    {
      id: 2,
      nombre: 'zombi',
      tipo: 'hostil',
      aspectoYComportamiento:
        'Humanoide de piel verde y ropa azul rasgada. Aparece en la oscuridad y de noche, persigue a jugadores, aldeanos y golems de hierro. Se quema con la luz del sol si no lleva casco, puede romper puertas de madera en dificultad difícil y puede convertirse en ahogado bajo el agua.',
      combateYDefensa: [
        'Ataca cuerpo a cuerpo; usa espada y retrocede para mantener distancia.',
        'Ilumina el terreno con antorchas para evitar que aparezcan.',
        'Las puertas de hierro y las vallas altas los frenan.',
      ],
      drops: [
        { item: 'Carne podrida', probabilidad_default: 100 },
        { item: 'Lingote de hierro', probabilidad_default: 2.5 },
        { item: 'Zanahoria', probabilidad_default: 2.5 },
        { item: 'Patata', probabilidad_default: 2.5 },
      ],
    },
    {
      id: 3,
      nombre: 'esqueleto',
      tipo: 'hostil',
      aspectoYComportamiento:
        'Mob de huesos que dispara flechas a distancia. Aparece de noche y en mazmorras, y se quema con la luz del sol. Huye si te acercas demasiado y dispara en zigzag.',
      combateYDefensa: [
        'Acércate en zigzag o usa un escudo para bloquear las flechas.',
        'Atácalos cuerpo a cuerpo: son frágiles de cerca.',
        'Esconde tu base bajo techo para que no te disparen desde lejos.',
      ],
      drops: [
        { item: 'Hueso', probabilidad_default: 100 },
        { item: 'Flecha', probabilidad_default: 100 },
        { item: 'Arco', probabilidad_default: 8.5 },
      ],
    },
    {
      id: 4,
      nombre: 'araña',
      tipo: 'neutral',
      aspectoYComportamiento:
        'Araña grande y oscura con ojos rojos. De día es neutral y solo ataca si la provocas; de noche es hostil. Puede trepar por paredes, por lo que salta sobre ti desde las alturas.',
      combateYDefensa: [
        'Pelea en espacios abiertos y con espada; son rápidas pero débiles.',
        'Sube por bloques de 2 de altura: no podrán trepar si hay salientes.',
        'Evita luchar de noche en cuevas estrechas.',
      ],
      drops: [
        { item: 'Hilo', probabilidad_default: 100 },
        { item: 'Ojo de araña', probabilidad_default: 33 },
      ],
    },
    {
      id: 5,
      nombre: 'enderman',
      tipo: 'neutral',
      aspectoYComportamiento:
        'Mob alto y oscuro de ojos morados. Se vuelve agresivo si lo miras directamente a los ojos y se teletransporta. Recoge bloques, no soporta el agua y es el habitante típico del End.',
      combateYDefensa: [
        'Lleva una calabaza puesta para poder mirarlo sin provocarlo.',
        'Pelea bajo un techo de 2 bloques de altura: no puede teletransportarse hacia ti.',
        'Atácalo en el agua: recibe daño y se escapa.',
      ],
      drops: [
        { item: 'Perla de Ender', probabilidad_default: 100 },
      ],
    },
    {
      id: 6,
      nombre: 'esqueleto del wither',
      tipo: 'hostil',
      aspectoYComportamiento:
        'Esqueleto negro y muy alto que vive en las fortalezas del Nether. Ataca cuerpo a cuerpo y aplica el efecto Wither, que quita vida sin curarse con comida.',
      combateYDefensa: [
        'Usa armadura buena y leche para curar el efecto Wither.',
        'Pelea en pasillos de 2 de alto: su altura le dificulta moverse.',
        'Usa una espada con Afilado y Saqueo para obtener cráneos.',
      ],
      drops: [
        { item: 'Carbón', probabilidad_default: 33 },
        { item: 'Hueso', probabilidad_default: 100 },
        { item: 'Cráneo de esqueleto del wither', probabilidad_default: 2.5 },
      ],
    },
    {
      id: 7,
      nombre: 'ghast',
      tipo: 'hostil',
      aspectoYComportamiento:
        'Criatura blanca flotante con tentáculos que flota en el Nether y lanza bolas de fuego explosivas. Llora mientras ataca y es el único mob que puede dañarse con su propia bola de fuego devuelta.',
      combateYDefensa: [
        'Devuélvele la bola de fuego golpeándola con la mano o espada.',
        'Usa arco: son lentos y tienen poca vida.',
        'Protege tu portal con bloques para que no lo destruyan.',
      ],
      drops: [
        { item: 'Lágrima de Ghast', probabilidad_default: 50 },
        { item: 'Pólvora', probabilidad_default: 100 },
      ],
    },
    {
      id: 8,
      nombre: 'blaze',
      tipo: 'hostil',
      aspectoYComportamiento:
        'Mob de fuego que flota en las fortalezas del Nether. Dispara ráfagas de tres bolas de fuego y es inmune al fuego y a la lava. Aparece desde jaulas generadoras.',
      combateYDefensa: [
        'Usa bolas de nieve: les hacen daño aunque no sea mucho.',
        'Lleva poción de resistencia al fuego.',
        'Combátelos desde esquinas para esquivar sus disparos.',
      ],
      drops: [
        { item: 'Vara de Blaze', probabilidad_default: 50 },
      ],
    },
    {
      id: 9,
      nombre: 'slime',
      tipo: 'hostil',
      aspectoYComportamiento:
        'Cubo verde gelatinoso que salta. Aparece en pantanos y en chunks de slime bajo la capa 40. Al morir se divide en slimes más pequeños, y los más pequeños sueltan bolas de slime.',
      combateYDefensa: [
        'Mata primero los grandes para evitar que se multipliquen.',
        'Usa espada con Barrido para golpear varios a la vez.',
        'Los pequeños son inofensivos: no hacen daño.',
      ],
      drops: [
        { item: 'Bola de slime', probabilidad_default: 100 },
      ],
    },
    {
      id: 10,
      nombre: 'golem de hierro',
      tipo: 'neutral',
      aspectoYComportamiento:
        'Gigante de hierro que protege aldeas. Es neutral con el jugador, pero ataca a mobs hostiles. Si le haces daño o dañas aldeanos, se vuelve contra ti.',
      combateYDefensa: [
        'No lo ataques: tiene mucha vida y sus golpes lanzan al aire.',
        'Puede curarse con lingotes de hierro.',
        'Úsalo como defensa construyendo uno cerca de tu base.',
      ],
      drops: [
        { item: 'Lingote de hierro', probabilidad_default: 100 },
        { item: 'Amapola', probabilidad_default: 100 },
      ],
    },
    {
      id: 11,
      nombre: 'lobo',
      tipo: 'neutral',
      aspectoYComportamiento:
        'Animal gris que vive en taigas y bosques. Es neutral, pero ataca en grupo si lo golpeas. Se puede domesticar con huesos y entonces te defiende y te sigue.',
      combateYDefensa: [
        'Si ataca, hazlo cuerpo a cuerpo con una espada: tiene poca vida.',
        'Domestícalo con huesos para convertirlo en aliado.',
        'No golpees a uno de la manada o todos te atacarán.',
      ],
      drops: [],
    },
    {
      id: 12,
      nombre: 'vaca',
      tipo: 'pasivo',
      aspectoYComportamiento:
        'Animal de granja que camina lento y es fácil de criar. Se reproduce con trigo y se puede ordeñar con un cubo.',
      combateYDefensa: [
        'No ataca: puedes cazarla sin riesgo.',
        'Ordeña con un cubo para obtener leche.',
      ],
      drops: [
        { item: 'Cuero', probabilidad_default: 100 },
        { item: 'Ternera cruda', probabilidad_default: 100 },
      ],
    },
    {
      id: 13,
      nombre: 'cerdo',
      tipo: 'pasivo',
      aspectoYComportamiento:
        'Animal de granja de color rosa. Se reproduce con zanahorias, patatas o remolachas y se puede montar con una silla.',
      combateYDefensa: [
        'No ataca: es seguro cazarlo.',
        'Si lo mata un rayo, se convierte en piglin zombificado.',
      ],
      drops: [
        { item: 'Chuleta de cerdo cruda', probabilidad_default: 100 },
      ],
    },
    {
      id: 14,
      nombre: 'oveja',
      tipo: 'pasivo',
      aspectoYComportamiento:
        'Animal de granja con lana blanca (o de colores). Se esquila con tijeras para obtener lana y se reproduce con trigo.',
      combateYDefensa: [
        'No ataca: es seguro tratarla.',
        'Usa tijeras para esquilarla sin matarla.',
      ],
      drops: [
        { item: 'Lana', probabilidad_default: 100 },
        { item: 'Cordero crudo', probabilidad_default: 100 },
      ],
    },
    {
      id: 15,
      nombre: 'gallina',
      tipo: 'pasivo',
      aspectoYComportamiento:
        'Ave pequeña de granja que pone huevos cada pocos minutos y planea al caer. Se reproduce con semillas.',
      combateYDefensa: [
        'No ataca: es segura.',
        'Cría con semillas para tener granja de huevos.',
      ],
      drops: [
        { item: 'Pollo crudo', probabilidad_default: 100 },
        { item: 'Pluma', probabilidad_default: 100 },
      ],
    },
  ];

  private nextId = 16;

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