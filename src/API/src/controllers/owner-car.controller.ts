import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Owner,
  Car,
} from '../models';
import {OwnerRepository} from '../repositories';

export class OwnerCarController {
  constructor(
    @repository(OwnerRepository) protected ownerRepository: OwnerRepository,
  ) { }

  @get('/owners/{id}/cars', {
    responses: {
      '200': {
        description: 'Array of Owner has many Car',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Car)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Car>,
  ): Promise<Car[]> {
    return this.ownerRepository.cars(id).find(filter);
  }

  @post('/owners/{id}/cars', {
    responses: {
      '200': {
        description: 'Owner model instance',
        content: {'application/json': {schema: getModelSchemaRef(Car)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Owner.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {
            title: 'NewCarInOwner',
            exclude: ['id'],
            optional: ['ownerId']
          }),
        },
      },
    }) car: Omit<Car, 'id'>,
  ): Promise<Car> {
    return this.ownerRepository.cars(id).create(car);
  }

  @patch('/owners/{id}/cars', {
    responses: {
      '200': {
        description: 'Owner.Car PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {partial: true}),
        },
      },
    })
    car: Partial<Car>,
    @param.query.object('where', getWhereSchemaFor(Car)) where?: Where<Car>,
  ): Promise<Count> {
    return this.ownerRepository.cars(id).patch(car, where);
  }

  @del('/owners/{id}/cars', {
    responses: {
      '200': {
        description: 'Owner.Car DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Car)) where?: Where<Car>,
  ): Promise<Count> {
    return this.ownerRepository.cars(id).delete(where);
  }
}
