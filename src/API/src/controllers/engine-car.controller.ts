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
  Engine,
  Car,
} from '../models';
import {EngineRepository} from '../repositories';

export class EngineCarController {
  constructor(
    @repository(EngineRepository) protected engineRepository: EngineRepository,
  ) { }

  @get('/engines/{id}/cars', {
    responses: {
      '200': {
        description: 'Array of Engine has many Car',
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
    return this.engineRepository.cars(id).find(filter);
  }

  @post('/engines/{id}/cars', {
    responses: {
      '200': {
        description: 'Engine model instance',
        content: {'application/json': {schema: getModelSchemaRef(Car)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Engine.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {
            title: 'NewCarInEngine',
            exclude: ['id'],
            optional: ['engineId']
          }),
        },
      },
    }) car: Omit<Car, 'id'>,
  ): Promise<Car> {
    return this.engineRepository.cars(id).create(car);
  }

  @patch('/engines/{id}/cars', {
    responses: {
      '200': {
        description: 'Engine.Car PATCH success count',
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
    return this.engineRepository.cars(id).patch(car, where);
  }

  @del('/engines/{id}/cars', {
    responses: {
      '200': {
        description: 'Engine.Car DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Car)) where?: Where<Car>,
  ): Promise<Count> {
    return this.engineRepository.cars(id).delete(where);
  }
}
