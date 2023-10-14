import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @ApiTags('Places')
  @Post()
  public async createPlace(@Body() body) {
    return await this.placesService.createPlace(body);
  }

  @ApiTags('Places')
  @Get()
  public async findAllPlaces() {
    return await this.placesService.findAllPlaces();
  }

  @ApiTags('Places')
  @Get(':id')
  // public async findPlaceById(@Param('id', new ParseUUIDPipe()) id: string) {
  public async findPlaceById(@Param('id') id: string) {
    return await this.placesService.findPlaceById(id);
  }

  @ApiTags('Places')
  @Delete(':id')
  public async deletePlace(@Param('id') id: string) {
    return await this.placesService.deletePlace(id);
  }
}
