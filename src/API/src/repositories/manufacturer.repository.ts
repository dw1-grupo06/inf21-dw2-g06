import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CarDealershipDbDataSource} from '../datasources';
import {Manufacturer, ManufacturerRelations, Car} from '../models';
import {CarRepository} from './car.repository';

export class ManufacturerRepository extends DefaultCrudRepository<
  Manufacturer,
  typeof Manufacturer.prototype.id,
  ManufacturerRelations
> {

  public readonly cars: HasManyRepositoryFactory<Car, typeof Manufacturer.prototype.id>;

  constructor(
    @inject('datasources.car_dealership_db') dataSource: CarDealershipDbDataSource, @repository.getter('CarRepository') protected carRepositoryGetter: Getter<CarRepository>,
  ) {
    super(Manufacturer, dataSource);
    this.cars = this.createHasManyRepositoryFactoryFor('cars', carRepositoryGetter,);
    this.registerInclusionResolver('cars', this.cars.inclusionResolver);
  }
}
