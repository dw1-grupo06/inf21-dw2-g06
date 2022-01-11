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
import {Owner} from '../models';
import {OwnerRepository} from '../repositories';

export class OwnerController {
  constructor(
    @repository(OwnerRepository)
    public ownerRepository : OwnerRepository,
  ) {}

  @post('/owners')
  @response(200, {
    description: 'Owner model instance',
    content: {'application/json': {schema: getModelSchemaRef(Owner)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owner, {
            title: 'NewOwner',
            exclude: ['id'],
          }),
        },
      },
    })
    owner: Omit<Owner, 'id'>,
  ): Promise<Owner> {
    return this.ownerRepository.create(owner);
  }

  @get('/owners/count')
  @response(200, {
    description: 'Owner model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Owner) where?: Where<Owner>,
  ): Promise<Count> {
    return this.ownerRepository.count(where);
  }

  @get('/owners')
  @response(200, {
    description: 'Array of Owner model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Owner, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Owner) filter?: Filter<Owner>,
  ): Promise<Owner[]> {
    return this.ownerRepository.find(filter);
  }

  @patch('/owners')
  @response(200, {
    description: 'Owner PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owner, {partial: true}),
        },
      },
    })
    owner: Owner,
    @param.where(Owner) where?: Where<Owner>,
  ): Promise<Count> {
    return this.ownerRepository.updateAll(owner, where);
  }

  @get('/owners/{id}')
  @response(200, {
    description: 'Owner model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Owner, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Owner, {exclude: 'where'}) filter?: FilterExcludingWhere<Owner>
  ): Promise<Owner> {
    return this.ownerRepository.findById(id, filter);
  }

  @patch('/owners/{id}')
  @response(204, {
    description: 'Owner PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owner, {partial: true}),
        },
      },
    })
    owner: Owner,
  ): Promise<void> {
    await this.ownerRepository.updateById(id, owner);
  }

  @put('/owners/{id}')
  @response(204, {
    description: 'Owner PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() owner: Owner,
  ): Promise<void> {
    await this.ownerRepository.replaceById(id, owner);
  }

  @del('/owners/{id}')
  @response(204, {
    description: 'Owner DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ownerRepository.deleteById(id);
  }
}
