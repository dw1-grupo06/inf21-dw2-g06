import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CarDealershipDbDataSource} from '../datasources';
import {Owner, OwnerRelations, Car} from '../models';
import {CarRepository} from './car.repository';

export class OwnerRepository extends DefaultCrudRepository<
  Owner,
  typeof Owner.prototype.id,
  OwnerRelations
> {

  public readonly cars: HasManyRepositoryFactory<Car, typeof Owner.prototype.id>;

  constructor(
    @inject('datasources.car_dealership_db') dataSource: CarDealershipDbDataSource, @repository.getter('CarRepository') protected carRepositoryGetter: Getter<CarRepository>,
  ) {
    super(Owner, dataSource);
    this.cars = this.createHasManyRepositoryFactoryFor('cars', carRepositoryGetter,);
    this.registerInclusionResolver('cars', this.cars.inclusionResolver);
  }
}
