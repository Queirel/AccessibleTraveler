import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlaceDto } from './dto/create-place.dto';
import { PlaceEntity } from './entities/place.entity';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  // @Get('seed')
  // public async seedPlaces() {
  //   return await this.placesService.seedPlaces();
  // }

  @ApiTags('Places')
  @Post()
  public async createPlace(@Body() body) {
    // public async createPlace(@Body() createPlaceDto: CreatePlaceDto) {
    return await this.placesService.createPlace(body);
  }

  @Put(':id')
  public async updatePlace(@Param('id') id: string, @Body() body: any) {
    try {
      return await this.placesService.updatePlace(body, id);
    } catch {}
  }

  @ApiTags('Places')
  @Get()
  public async findAllPlaces(): Promise<PlaceEntity[]> {
    try {
      return await this.placesService.findAllPlaces();
    } catch (err) {
      throw new NotFoundException('Places not found');
    }
  }

  @ApiTags('Places')
  @Get(':id')
  // public async findPlaceById(@Param('id', new ParseUUIDPipe()) id: string) {
  public async findPlaceById(@Param('id') id: string): Promise<PlaceEntity> {
    try {
      return await this.placesService.findPlaceById(id);
    } catch (err) {
      throw new NotFoundException('Place not found');
    }
  }

  @ApiTags('Places')
  @Delete(':id')
  public async deletePlace(@Param('id') id: string) {
    try {
      return await this.placesService.deletePlace(id);
    } catch {}
  }
}
