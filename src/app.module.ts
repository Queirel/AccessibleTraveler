import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CountryModule } from './country/country.module';
import { StatesModule } from './states/states.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessibilityModule } from './accessibility/accessibility.module';
import { CitiesModule } from './cities/cities.module';
import { DataSourceConfig } from './config/data.source';
import { RecommendedModule } from './recommended/recommended.module';
import { PlacesModule } from './places/places.module';
import { CommentsModule } from './comments/comments.module';
import { CategoriesModule } from './categories/categories.module';
import { ImagesPlacesModule } from './images-places/images-places.module';
import { PlaceAccModule } from './place-acc/place-acc.module';
import { UserAccModule } from './user-acc/user-acc.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot({DataSourceConfig}),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    UsersModule,
    CountryModule,
    StatesModule,
    AccessibilityModule,
    CitiesModule,
    RecommendedModule,
    PlacesModule,
    CommentsModule,
    CategoriesModule,
    ImagesPlacesModule,
    PlaceAccModule,
    UserAccModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
