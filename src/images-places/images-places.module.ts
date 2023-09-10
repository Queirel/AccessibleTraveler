import { Module } from '@nestjs/common';
import { ImagesPlacesService } from './images-places.service';
import { ImagesPlacesController } from './images-places.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagePlaceEntity } from './entities/images-place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImagePlaceEntity])],
  controllers: [ImagesPlacesController],
  providers: [ImagesPlacesService],
})
export class ImagesPlacesModule {}
