import { readFileSync } from 'fs';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { PackageSchema } from '../package/package.schema';
import { StudentHouseSchema } from '../studentHouse/studentHouse.schema';

const entityPath = join(__dirname, '../', '/**/');
const migrationsPath = join(__dirname, '../../../', 'migrations/development/1676748953344-dev.js');

console.log(11111);
console.log(migrationsPath);



export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'studen_depot',
  // entities: [entityPath + '*.schema.ts', entityPath + '*.schema.js'],
  entities: [PackageSchema, StudentHouseSchema],
  logging: true,
  migrations: [migrationsPath],
  // migrations: ['C:\\JS\\StudentDepot\\student-depot\\migrations\\development\\1676748953344-dev.js'],
  logNotifications: true,
  // ssl: prepareCertificate(readFileSync),
};

console.log(typeOrmConfig);

export const appDataSource = new DataSource(typeOrmConfig);
