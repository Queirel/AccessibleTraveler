// import { ConfigModule } from '@nestjs/config';
// import InitSeeder from 'src/utils/database/seeders/init.seeder';
import { DataSource, DataSourceOptions } from 'typeorm';

// ConfigModule.forRoot({
//   envFilePath: `.${process.env.NODE_ENV}.env`,
// });

// const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  // host: configService.get('DB_HOST'),
  // port: configService.get('DB_PORT'),
  // username: configService.get('DB_USER'),
  // password: configService.get('DB_PASSWORD'),
  // database: configService.get('DB_NAME'),
  host: 'accesapp2.csigyf5niqgz.us-east-2.rds.amazonaws.com',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'accesapp',
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  synchronize: false,
  migrationsRun: true,
  ssl: {
    rejectUnauthorized: false, // This line will fix new error
  },
  // ssl: true,
  // extra: {
  //   trustServerCertificate: true,
  //   Encrypt: true,
  //   IntegratedSecurity: false,
  // },
  // logging: true,
  // cache: true,
  // runSeeders: [InitSeeder],
  // namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);

// export const dataSource = new DataSource(
//   options as DataSourceOptions & SeederOptions,
// );
