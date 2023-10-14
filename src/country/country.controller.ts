import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiTags('Country')
  @Post()
  public async createCountry(@Body() body) {
    return await this.countryService.createCountry(body);
  }

  @ApiTags('Country')
  @Get()
  public async findAllCountries() {
    return await this.countryService.findAllCountries();
  }

  @ApiTags('Country')
  @Get(':id')
  public async findCountryById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.countryService.findCountryById(id);
  }

  @ApiTags('Country')
  @Delete(':id')
  public async deleteCountry(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.countryService.deleteCountry(id);
  }
}
