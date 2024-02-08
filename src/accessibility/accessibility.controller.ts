import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { AccessibilityService } from './accessibility.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('accessibility')
export class AccessibilityController {
  constructor(private readonly accessibilityService: AccessibilityService) {}

  // @Get('seed')
  // public async seedAccessibilities() {
  //   return await this.accessibilityService.seedAccessibilities();
  // }

  @Put(':id')
  public async updateAccessibility(@Param('id') id: string, @Body() body: any) {
    try {
      return await this.accessibilityService.updateAccessibility(body, id);
    } catch {}
  }

  @ApiTags('Accessibility')
  @Post()
  public async createAccessibility(@Body() body) {
    try {
      return await this.accessibilityService.createAccessibility(body);
    } catch {}
  }

  @ApiTags('Accessibility')
  @Get()
  public async findAllAccessibilities() {
    try {
      return await this.accessibilityService.findAllAccessibilities();
    } catch (err) {
      throw new NotFoundException('Accessibilities not found');
    }
  }

  @ApiTags('Accessibility')
  @Get(':id')
  public async findAccessibilityById(@Param('id') id: string) {
    try {
      return await this.accessibilityService.findAccessibilityById(id);
    } catch (err) {
      throw new NotFoundException('Accessibility not found');
    }
  }

  @ApiTags('Accessibility')
  @Delete(':id')
  public async deleteAccessibility(@Param('id') id: string) {
    try {
      return await this.accessibilityService.deleteAccessibility(id);
    } catch {}
  }
}
