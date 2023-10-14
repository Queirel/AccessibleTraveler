import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
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

  @ApiTags('Recommended')
  @Get(':id')
  public async findRecommendedById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    return await this.recommendedService.findRecommendedById(id);
  }

  @ApiTags('Recommended')
  @Delete(':id')
  public async deleteRecommended(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.recommendedService.deleteRecommended(id);
  }
}
