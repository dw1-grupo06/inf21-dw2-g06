import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'car_dealership_db',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: '',
  user: 'root',
  password: 'bruno123456789',
  database: 'car_dealership'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CarDealershipDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'car_dealership_db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.car_dealership_db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
