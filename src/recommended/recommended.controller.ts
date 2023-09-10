import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecommendedService } from './recommended.service';
import { CreateRecommendedDto } from './dto/create-recommended.dto';
import { UpdateRecommendedDto } from './dto/update-recommended.dto';

@Controller('recommended')
export class RecommendedController {
  constructor(private readonly recommendedService: RecommendedService) {}

  @Post()
  create(@Body() createRecommendedDto: CreateRecommendedDto) {
    return this.recommendedService.create(createRecommendedDto);
  }

  @Get()
  findAll() {
    return this.recommendedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recommendedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecommendedDto: UpdateRecommendedDto) {
    return this.recommendedService.update(+id, updateRecommendedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recommendedService.remove(+id);
  }
}
