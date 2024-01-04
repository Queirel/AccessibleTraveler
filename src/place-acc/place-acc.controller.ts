import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { PlaceAccService } from './place-acc.service';
import { CreatePlaceAccDto } from './dto/create-place-acc.dto';
import { UpdatePlaceAccDto } from './dto/update-place-acc.dto';

@Controller('place-acc')
export class PlaceAccController {
  constructor(private readonly placeAccService: PlaceAccService) {}

  @Post()
  create(@Body() createPlaceAccDto: CreatePlaceAccDto) {
    return this.placeAccService.create(createPlaceAccDto);
  }

  @Get()
  findAll() {
    return this.placeAccService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.placeAccService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePlaceAccDto: UpdatePlaceAccDto,
  ) {
    return this.placeAccService.update(id, updatePlaceAccDto);
  }

  @Delete(':id')
  public async deletePlaceAcc(@Param('id', ParseUUIDPipe) id: string) {
    return await this.placeAccService.deletePlaceAcc(id);
  }
}
