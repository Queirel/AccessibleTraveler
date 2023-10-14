import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @ApiTags('Cities')
  @Post()
  public async createCity(@Body() body) {
    return await this.citiesService.createCity(body);
  }

  @ApiTags('Cities')
  @Get()
  public async findAllCities() {
    return await this.citiesService.findAllCities();
  }

  @ApiTags('Cities')
  @Get(':id')
  public async findCityById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.citiesService.findCityById(id);
  }

  @ApiTags('Cities')
  @Delete(':id')
  public async deleteCity(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.citiesService.deleteCity(id);
  }
}
