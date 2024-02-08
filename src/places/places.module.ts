import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceEntity } from './entities/place.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoriesEntity } from 'src/categories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceEntity, CategoriesEntity])],
  controllers: [PlacesController],
  providers: [PlacesService],
  exports: [PlacesService],
})
export class PlacesModule {}
