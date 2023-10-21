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
import { RecommendedService } from './recommended.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('recommended')
export class RecommendedController {
  constructor(private readonly recommendedService: RecommendedService) {}

  @ApiTags('Recommended')
  @Post()
  public async createRecommended(@Body() body) {
    return await this.recommendedService.createRecommended(body);
  }

  @ApiTags('Recommended')
  @Get()
  public async findAllRecommended() {
    return await this.recommendedService.findAllRecommended();
  }

  @Put(':id')
  public async updateRecommended(@Param('id') id: string, @Body() body: any) {
    return await this.recommendedService.updateRecommended(body, id);
  }

  @ApiTags('Recommended')
  @Get(':id')
  public async findRecommendedById(@Param('id') id: string) {
    return await this.recommendedService.findRecommendedById(id);
  }

  @ApiTags('Recommended')
  @Delete(':id')
  public async deleteRecommended(@Param('id') id: string) {
    return await this.recommendedService.deleteRecommended(id);
  }
}
