import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CarDealershipDbDataSource} from '../datasources';
import {Engine, EngineRelations, Car} from '../models';
import {CarRepository} from './car.repository';

export class EngineRepository extends DefaultCrudRepository<
  Engine,
  typeof Engine.prototype.id,
  EngineRelations
> {

  public readonly cars: HasManyRepositoryFactory<Car, typeof Engine.prototype.id>;

  constructor(
    @inject('datasources.car_dealership_db') dataSource: CarDealershipDbDataSource, @repository.getter('CarRepository') protected carRepositoryGetter: Getter<CarRepository>,
  ) {
    super(Engine, dataSource);
    this.cars = this.createHasManyRepositoryFactoryFor('cars', carRepositoryGetter,);
    this.registerInclusionResolver('cars', this.cars.inclusionResolver);
  }
}
