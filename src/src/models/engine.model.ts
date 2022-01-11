import {Entity, model, property, hasMany} from '@loopback/repository';
import {Car} from './car.model';

@model()
export class Engine extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  horsepower: number;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @hasMany(() => Car)
  cars: Car[];

  constructor(data?: Partial<Engine>) {
    super(data);
  }
}

export interface EngineRelations {
  // describe navigational properties here
}

export type EngineWithRelations = Engine & EngineRelations;
