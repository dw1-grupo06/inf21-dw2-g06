import {Entity, model, property} from '@loopback/repository';

@model()
export class Car extends Entity {
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
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'number',
  })
  engineId?: number;

  @property({
    type: 'number',
  })
  manufacturerId?: number;

  @property({
    type: 'number',
  })
  ownerId?: number;

  constructor(data?: Partial<Car>) {
    super(data);
  }
}

export interface CarRelations {
  // describe navigational properties here
}

export type CarWithRelations = Car & CarRelations;
