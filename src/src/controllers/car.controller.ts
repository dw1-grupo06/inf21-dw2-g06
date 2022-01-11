import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Car} from '../models';
import {CarRepository} from '../repositories';

export class CarController {
  constructor(
    @repository(CarRepository)
    public carRepository : CarRepository,
  ) {}

  @post('/cars')
  @response(200, {
    description: 'Car model instance',
    content: {'application/json': {schema: getModelSchemaRef(Car)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {
            title: 'NewCar',
            exclude: ['id'],
          }),
        },
      },
    })
    car: Omit<Car, 'id'>,
  ): Promise<Car> {
    return this.carRepository.create(car);
  }

  @get('/cars/count')
  @response(200, {
    description: 'Car model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Car) where?: Where<Car>,
  ): Promise<Count> {
    return this.carRepository.count(where);
  }

  @get('/cars')
  @response(200, {
    description: 'Array of Car model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Car, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Car) filter?: Filter<Car>,
  ): Promise<Car[]> {
    return this.carRepository.find(filter);
  }

  @patch('/cars')
  @response(200, {
    description: 'Car PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {partial: true}),
        },
      },
    })
    car: Car,
    @param.where(Car) where?: Where<Car>,
  ): Promise<Count> {
    return this.carRepository.updateAll(car, where);
  }

  @get('/cars/{id}')
  @response(200, {
    description: 'Car model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Car, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Car, {exclude: 'where'}) filter?: FilterExcludingWhere<Car>
  ): Promise<Car> {
    return this.carRepository.findById(id, filter);
  }

  @patch('/cars/{id}')
  @response(204, {
    description: 'Car PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {partial: true}),
        },
      },
    })
    car: Car,
  ): Promise<void> {
    await this.carRepository.updateById(id, car);
  }

  @put('/cars/{id}')
  @response(204, {
    description: 'Car PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() car: Car,
  ): Promise<void> {
    await this.carRepository.replaceById(id, car);
  }

  @del('/cars/{id}')
  @response(204, {
    description: 'Car DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.carRepository.deleteById(id);
  }
}
