import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AccessibilityService } from './accessibility.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('accessibility')
export class AccessibilityController {
  constructor(private readonly accessibilityService: AccessibilityService) {}

  @Get('seed')
  public async seedAccessibilities() {
    return await this.accessibilityService.seedAccessibilities();
  }

  @Put(':id')
  public async updateAccessibility(@Param('id') id: string, @Body() body: any) {
    return await this.accessibilityService.updateAccessibility(body, id);
  }

  @ApiTags('Accessibility')
  @Post()
  public async createAccessibility(@Body() body) {
    return await this.accessibilityService.createAccessibility(body);
  }

  @ApiTags('Accessibility')
  @Get()
  public async findAllAccessibilities() {
    return await this.accessibilityService.findAllAccessibilities();
  }

  @ApiTags('Accessibility')
  @Get(':id')
  public async findAccessibilityById(@Param('id') id: string) {
    return await this.accessibilityService.findAccessibilityById(id);
  }

  @ApiTags('Accessibility')
  @Delete(':id')
  public async deleteAccessibility(@Param('id') id: string) {
    return await this.accessibilityService.deleteAccessibility(id);
  }
}
