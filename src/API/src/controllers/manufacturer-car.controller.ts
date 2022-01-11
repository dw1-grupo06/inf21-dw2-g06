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
  Manufacturer,
  Car,
} from '../models';
import {ManufacturerRepository} from '../repositories';

export class ManufacturerCarController {
  constructor(
    @repository(ManufacturerRepository) protected manufacturerRepository: ManufacturerRepository,
  ) { }

  @get('/manufacturers/{id}/cars', {
    responses: {
      '200': {
        description: 'Array of Manufacturer has many Car',
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
    return this.manufacturerRepository.cars(id).find(filter);
  }

  @post('/manufacturers/{id}/cars', {
    responses: {
      '200': {
        description: 'Manufacturer model instance',
        content: {'application/json': {schema: getModelSchemaRef(Car)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Manufacturer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {
            title: 'NewCarInManufacturer',
            exclude: ['id'],
            optional: ['manufacturerId']
          }),
        },
      },
    }) car: Omit<Car, 'id'>,
  ): Promise<Car> {
    return this.manufacturerRepository.cars(id).create(car);
  }

  @patch('/manufacturers/{id}/cars', {
    responses: {
      '200': {
        description: 'Manufacturer.Car PATCH success count',
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
    return this.manufacturerRepository.cars(id).patch(car, where);
  }

  @del('/manufacturers/{id}/cars', {
    responses: {
      '200': {
        description: 'Manufacturer.Car DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Car)) where?: Where<Car>,
  ): Promise<Count> {
    return this.manufacturerRepository.cars(id).delete(where);
  }
}
