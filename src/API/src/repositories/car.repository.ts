import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CarDealershipDbDataSource} from '../datasources';
import {Car, CarRelations} from '../models';

export class CarRepository extends DefaultCrudRepository<
  Car,
  typeof Car.prototype.id,
  CarRelations
> {
  constructor(
    @inject('datasources.car_dealership_db') dataSource: CarDealershipDbDataSource,
  ) {
    super(Car, dataSource);
  }
}
