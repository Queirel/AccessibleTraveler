import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
// import { CountryModule } from './country/country.module';
// import { StatesModule } from './states/states.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessibilityModule } from './accessibility/accessibility.module';
// import { CitiesModule } from './cities/cities.module';
import { DataSourceConfig } from './config/data.source';
import { RecommendedModule } from './recommended/recommended.module';
import { PlacesModule } from './places/places.module';
import { CommentsModule } from './comments/comments.module';
import { CategoriesModule } from './categories/categories.module';
import { ImagesPlacesModule } from './images-places/images-places.module';
import { PlaceAccModule } from './place-acc/place-acc.module';
// import { UserAccModule } from './user-acc/user-acc.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';
import { UsersEntity } from './users/entities/user.entity';
import { PlaceEntity } from './places/entities/place.entity';
import { CategoriesEntity } from './categories/entities/category.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot(DataSourceConfig),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => DataSourceConfig,
    }),
    TypeOrmModule.forFeature([UsersEntity, PlaceEntity, CategoriesEntity]),
    UsersModule,
    // CountryModule,
    // StatesModule,
    MulterModule.register({
      dest: './uploads',
    }),
    AccessibilityModule,
    // CitiesModule,
    RecommendedModule,
    PlacesModule,
    CommentsModule,
    CategoriesModule,
    ImagesPlacesModule,
    PlaceAccModule,
    AuthModule,
    SeedModule,
    // UserAccModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
