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
import {Engine} from '../models';
import {EngineRepository} from '../repositories';

export class EngineController {
  constructor(
    @repository(EngineRepository)
    public engineRepository : EngineRepository,
  ) {}

  @post('/engines')
  @response(200, {
    description: 'Engine model instance',
    content: {'application/json': {schema: getModelSchemaRef(Engine)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Engine, {
            title: 'NewEngine',
            exclude: ['id'],
          }),
        },
      },
    })
    engine: Omit<Engine, 'id'>,
  ): Promise<Engine> {
    return this.engineRepository.create(engine);
  }

  @get('/engines/count')
  @response(200, {
    description: 'Engine model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Engine) where?: Where<Engine>,
  ): Promise<Count> {
    return this.engineRepository.count(where);
  }

  @get('/engines')
  @response(200, {
    description: 'Array of Engine model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Engine, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Engine) filter?: Filter<Engine>,
  ): Promise<Engine[]> {
    return this.engineRepository.find(filter);
  }

  @patch('/engines')
  @response(200, {
    description: 'Engine PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Engine, {partial: true}),
        },
      },
    })
    engine: Engine,
    @param.where(Engine) where?: Where<Engine>,
  ): Promise<Count> {
    return this.engineRepository.updateAll(engine, where);
  }

  @get('/engines/{id}')
  @response(200, {
    description: 'Engine model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Engine, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Engine, {exclude: 'where'}) filter?: FilterExcludingWhere<Engine>
  ): Promise<Engine> {
    return this.engineRepository.findById(id, filter);
  }

  @patch('/engines/{id}')
  @response(204, {
    description: 'Engine PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Engine, {partial: true}),
        },
      },
    })
    engine: Engine,
  ): Promise<void> {
    await this.engineRepository.updateById(id, engine);
  }

  @put('/engines/{id}')
  @response(204, {
    description: 'Engine PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() engine: Engine,
  ): Promise<void> {
    await this.engineRepository.replaceById(id, engine);
  }

  @del('/engines/{id}')
  @response(204, {
    description: 'Engine DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.engineRepository.deleteById(id);
  }
}
