import { Injectable } from '@nestjs/common';
import { CreateImagesPlaceDto } from './dto/create-images-place.dto';
import { UpdateImagesPlaceDto } from './dto/update-images-place.dto';

@Injectable()
export class ImagesPlacesService {
  create(createImagesPlaceDto: CreateImagesPlaceDto) {
    return 'This action adds a new imagesPlace';
  }

  findAll() {
    return `This action returns all imagesPlaces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagesPlace`;
  }

  update(id: number, updateImagesPlaceDto: UpdateImagesPlaceDto) {
    return `This action updates a #${id} imagesPlace`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagesPlace`;
  }
}
