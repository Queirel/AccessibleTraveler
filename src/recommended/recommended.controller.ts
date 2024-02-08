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
import { RecommendedService } from './recommended.service';
import { ApiTags } from '@nestjs/swagger';
import { RecommendedEntity } from './entities/recommended.entity';

@Controller('recommended')
export class RecommendedController {
  constructor(private readonly recommendedService: RecommendedService) {}

  @ApiTags('Recommended')
  @Post()
  public async createRecommended(@Body() body) {
    try {
      return await this.recommendedService.createRecommended(body);
    } catch {}
  }

  @ApiTags('Recommended')
  @Get()
  public async findAllRecommended(): Promise<RecommendedEntity[]> {
    try {
      return await this.recommendedService.findAllRecommended();
    } catch (err) {
      throw new NotFoundException('Recommended not found');
    }
  }

  @Put(':id')
  public async updateRecommended(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: any,
  ) {
    try {
      return await this.recommendedService.updateRecommended(body, id);
    } catch {}
  }

  @ApiTags('Recommended')
  @Get(':id')
  public async findRecommendedById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<RecommendedEntity> {
    try {
      return await this.recommendedService.findRecommendedById(id);
    } catch (err) {
      throw new NotFoundException('Recommended not found');
    }
  }

  @ApiTags('Recommended')
  @Delete(':id')
  public async deleteRecommended(@Param('id', ParseUUIDPipe) id: string) {
    try {
      return await this.recommendedService.deleteRecommended(id);
    } catch {}
  }
}
