import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Put(':id')
  public async updateCategory(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: any,
  ) {
    return await this.categoriesService.updateCategory(body, id);
  }

  @ApiTags('Category')
  @Get('seed')
  public async seedCategory() {
    await this.categoriesService.seedCategory({
      name: 'Alojamiento',
      description: 'Alojamiento',
      image: '1',
    });
    await this.categoriesService.seedCategory({
      name: 'Transporte',
      description: 'Transporte',
      image: '2',
    });
    await this.categoriesService.seedCategory({
      name: 'Actividades',
      description: 'Actividades',
      image: '3',
    });
    await this.categoriesService.seedCategory({
      name: 'Pasajes',
      description: 'Pasajes',
      image: '4',
    });
    await this.categoriesService.seedCategory({
      name: 'Comercios',
      description: 'Comercios',
      image: '5',
    });
    await this.categoriesService.seedCategory({
      name: 'Gastronomia',
      description: 'Gastronomia',
      image: '6',
    });
    await this.categoriesService.seedCategory({
      name: 'Agencias de viaje',
      description: 'Agencias de viaje',
      image: '7',
    });
    await this.categoriesService.seedCategory({
      name: 'Agencias',
      description: 'Agencias',
      image: '8',
    });
    await this.categoriesService.seedCategory({
      name: 'Playas y Balnearios',
      description: 'Playas y Balnearios',
      image: '9',
    });

    return await this.categoriesService.findAllCategories();
  }

  @ApiTags('Category')
  @Post()
  public async createCategory(@Body() body) {
    return await this.categoriesService.createCategory(body);
  }

  @ApiTags('Category')
  @Get()
  public async findAllCategories() {
    return await this.categoriesService.findAllCategories();
  }

  @ApiTags('Category')
  @Get(':id')
  public async findCategoryById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.categoriesService.findCategoryById(id);
  }

  @ApiTags('Category')
  @Delete(':id')
  public async deleteCategory(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.categoriesService.deleteCategory(id);
  }
}
