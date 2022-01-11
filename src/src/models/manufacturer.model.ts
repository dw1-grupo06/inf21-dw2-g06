import {Entity, model, property, hasMany} from '@loopback/repository';
import {Car} from './car.model';

@model()
export class Manufacturer extends Entity {
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
  founded: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @hasMany(() => Car)
  cars: Car[];

  constructor(data?: Partial<Manufacturer>) {
    super(data);
  }
}

export interface ManufacturerRelations {
  // describe navigational properties here
}

export type ManufacturerWithRelations = Manufacturer & ManufacturerRelations;
