import 'reflect-metadata';

import { DataSource, DataSourceOptions } from 'typeorm';

import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const typeOrmDatabaseOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: JSON.parse(configService.get('DATABASE_LOGGING')),
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
  subscribers: ['dist/database/subscribers/*.subscriber.js'],
};

export const AppDataSource = new DataSource(typeOrmDatabaseOptions);
