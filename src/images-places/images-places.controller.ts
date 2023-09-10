import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagesPlacesService } from './images-places.service';
import { CreateImagesPlaceDto } from './dto/create-images-place.dto';
import { UpdateImagesPlaceDto } from './dto/update-images-place.dto';

@Controller('images-places')
export class ImagesPlacesController {
  constructor(private readonly imagesPlacesService: ImagesPlacesService) {}

  @Post()
  create(@Body() createImagesPlaceDto: CreateImagesPlaceDto) {
    return this.imagesPlacesService.create(createImagesPlaceDto);
  }

  @Get()
  findAll() {
    return this.imagesPlacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesPlacesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagesPlaceDto: UpdateImagesPlaceDto) {
    return this.imagesPlacesService.update(+id, updateImagesPlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesPlacesService.remove(+id);
  }
}
