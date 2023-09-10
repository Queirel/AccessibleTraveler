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

@Module({
  imports: [
    TypeOrmModule.forRoot(DataSourceConfig),
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
